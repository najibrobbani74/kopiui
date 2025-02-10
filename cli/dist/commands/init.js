"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSetup = initSetup;
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
const component_list_1 = require("../settings/component-list");
const execa_1 = require("execa");
const add_1 = require("./add");
const BASE_URL = "https://kopiui.najibrobbani.site/api/registry";
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};
async function initSetup(framework) {
    if (!component_list_1.FrameworkListType.includes(framework)) {
        console.error(`${colors.red}🔴 Framework not provided${colors.reset}`);
        process.exit(1);
    }
    try {
        console.info(`🔵 Fetching initial files from ${colors.blue}${BASE_URL}/init/${framework}${colors.reset}`);
        const response = await fetch(`${BASE_URL}/init/${framework}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data } = await response.json();
        for (const file of data.files) {
            const destPath = path_1.default.join(process.cwd(), file.targetPath);
            const destDir = path_1.default.dirname(destPath);
            if (fs_1.default.existsSync(destPath)) {
                // Special handling for tailwind.config
                if (file.name === 'tailwind.config.js' || file.name === 'tailwind.config.ts') {
                    const existingContent = fs_1.default.readFileSync(destPath, 'utf-8');
                    try {
                        // Extract theme.extend from existing config
                        const existingExtend = existingContent.match(/theme:\s*{[\s\n]*extend:\s*{[^}]*}}/s)?.[0] || '';
                        const newContent = file.content;
                        const newExtend = newContent.match(/theme:\s*{[\s\n]*extend:\s*{[^}]*}}/s)?.[0] || '';
                        if (existingExtend && newExtend) {
                            // Merge the extend objects
                            const mergedContent = mergeTailwindExtend(existingContent, newContent);
                            fs_1.default.writeFileSync(destPath, mergedContent);
                            console.log(`🟢 Update Tailwind config in ${colors.green}${file.targetPath}${colors.reset}`);
                            continue;
                        }
                    }
                    catch (error) {
                        console.warn(`⚠️ Could not merge tailwind configs, skipping: ${error}`);
                        continue;
                    }
                }
                // Special handling for globals.css
                if (file.name === 'globals.css') {
                    const existingGlobals = fs_1.default.existsSync(destPath) ? fs_1.default.readFileSync(destPath, 'utf-8') : '';
                    const newContent = file.content;
                    const existingRoot = existingGlobals.match(/:root\s*{[^}]+}/)?.[0] || '';
                    const existingDark = existingGlobals.match(/\.dark\s*{[^}]+}/)?.[0] || '';
                    const newRoot = newContent.match(/:root\s*{[^}]+}/)?.[0] || '';
                    const newDark = newContent.match(/\.dark\s*{[^}]+}/)?.[0] || '';
                    let mergedRoot = existingRoot || newRoot;
                    let mergedDark = existingDark || newDark;
                    if (existingRoot && newRoot) {
                        mergedRoot = mergeVariables(existingRoot, newRoot);
                    }
                    if (existingDark && newDark) {
                        mergedDark = mergeVariables(existingDark, newDark);
                    }
                    const mergedContent = newContent
                        .replace(/:root\s*{[^}]+}/, mergedRoot)
                        .replace(/\.dark\s*{[^}]+}/, mergedDark);
                    fs_1.default.writeFileSync(destPath, mergedContent);
                    console.log(`🟢 Update CSS variables in ${colors.green}${file.targetPath}${colors.reset}`);
                    continue;
                }
                // Check if file is the same by normalizing whitespace
                const existingContent = fs_1.default.readFileSync(destPath, "utf-8");
                const normalizedExisting = existingContent.replace(/\s+/g, ' ').trim();
                const normalizedNew = file.content.replace(/\s+/g, ' ').trim();
                if (normalizedExisting === normalizedNew) {
                    console.log(`🟡 Skip ${colors.yellow}${file.targetPath}${colors.reset} because the file already exists and has the same content`);
                    continue;
                }
                else {
                    const { action } = await inquirer_1.default.prompt([{
                            type: 'list',
                            name: 'action',
                            message: `File ${file.targetPath} already exists and its contents are different. Select an action:`,
                            choices: [
                                { name: 'Skip', value: 's' },
                                { name: 'Replace', value: 'r' },
                                { name: 'Rename', value: 'n' },
                            ]
                        }]);
                    if (action === 'r') {
                        fs_1.default.writeFileSync(destPath, file.content);
                        console.log(`🟢 Replace ${colors.green}${file.targetPath}${colors.reset}`, '');
                    }
                    else if (action === 'n') {
                        let counter = 1;
                        let newDestPath;
                        const ext = path_1.default.extname(file.name);
                        const nameWithoutExt = path_1.default.basename(file.name, ext);
                        console.log(`⚪ Finding available filename for ${colors.blue}${file.name}${colors.reset}...`);
                        do {
                            newDestPath = path_1.default.join(destDir, `${nameWithoutExt}${counter}${ext}`);
                            counter++;
                        } while (fs_1.default.existsSync(newDestPath));
                        fs_1.default.writeFileSync(newDestPath, file.content);
                        console.log(`🟢 Create ${colors.green}${path_1.default.basename(newDestPath)}${colors.reset} (renamed from ${file.name})`);
                    }
                    else {
                        console.log(`🟡 Skip ${colors.yellow}${file.targetPath}${colors.reset}`);
                    }
                }
                continue;
            }
            // Ensure directory exists
            if (!fs_1.default.existsSync(destDir)) {
                fs_1.default.mkdirSync(destDir, { recursive: true });
            }
            // Write file
            fs_1.default.writeFileSync(destPath, file.content);
            console.log(`🟢 Create ${colors.green}${file.targetPath}${colors.reset}`);
        }
        if (data.packages) {
            const installedPackages = await (0, add_1.listDependencies)();
            const { needsInstall, missing } = await (0, add_1.displayPackageComparison)(data.packages, installedPackages);
            if (needsInstall) {
                const { shouldInstall } = await inquirer_1.default.prompt([{
                        type: 'confirm',
                        name: 'shouldInstall',
                        message: 'Some required packages are missing or need updating. Would you like to install them?',
                        default: true
                    }]);
                if (shouldInstall) {
                    try {
                        if (missing.dependencies.length > 0) {
                            console.log(`🟤 Installing dependencies...`);
                            await (0, execa_1.execa)('npm', ['install', ...missing.dependencies]);
                        }
                        if (missing.devDependencies.length > 0) {
                            console.log(`🟤 Installing dev dependencies...`);
                            await (0, execa_1.execa)('npm', ['install', '-D', ...missing.devDependencies]);
                        }
                        console.log('🟢 Packages installed successfully');
                    }
                    catch (error) {
                        console.error(`${colors.red}🔴 Failed to install packages:${colors.reset}`, error instanceof Error ? error.message : String(error));
                        process.exit(1);
                    }
                }
                else {
                    console.log('⚠️ Skipping package installation. Note that the component might not work correctly.');
                }
            }
            else {
                console.log('🟢 All required packages are already installed with compatible versions');
            }
        }
        console.log(`🟢 Project initialized successfully!`);
    }
    catch (error) {
        console.error(`${colors.red}🔴 Error:${colors.reset}`, error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
}
function mergeVariables(existing, newVars) {
    const existingVars = existing.match(/--[\w-]+:\s*[^;]+/g) || [];
    const newVarList = newVars.match(/--[\w-]+:\s*[^;]+/g) || [];
    const merged = [...(new Set([...existingVars, ...newVarList]))].sort();
    return newVars.replace(/({[^}]+})/, `{\n    ${[...merged].join(';\n    ')};\n  }`);
}
function mergeTailwindExtend(existing, newConfig) {
    // Helper function to extract extend object
    const getExtendObject = (content) => {
        const match = content.match(/theme:\s*{[\s\n]*extend:\s*({[^}]*})/s);
        if (!match)
            return {};
        try {
            // Convert the matched string to a valid object string
            const objStr = match[1].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2":')
                .replace(/'/g, '"')
                .replace(/,(\s*[}\]])/g, '$1');
            return JSON.parse(objStr);
        }
        catch {
            return {};
        }
    };
    const existingExtend = getExtendObject(existing);
    const newExtend = getExtendObject(newConfig);
    // Deep merge the extend objects
    const mergedExtend = { ...existingExtend, ...newExtend };
    // Replace the extend object in the new config
    return existing.replace(/(theme:\s*{[\s\n]*extend:\s*){[^}]*}}/s, `$1${JSON.stringify(mergedExtend, null, 2)}}`);
}
