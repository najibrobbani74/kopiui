"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addComponent = addComponent;
exports.listDependencies = listDependencies;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const execa_1 = require("execa");
const inquirer_1 = __importDefault(require("inquirer"));
const component_list_1 = __importStar(require("../settings/component-list"));
const BASE_URL = "https://kopiui.najibrobbani.site/api/registry"; // adjust as needed
const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};
function compareVersions(required, installed) {
    const cleanRequired = required.replace(/[\^~]/g, '');
    const cleanInstalled = installed.replace(/[\^~]/g, '');
    const [reqMajor, reqMinor, reqPatch] = cleanRequired.split('.').map(Number);
    const [insMajor, insMinor, insPatch] = cleanInstalled.split('.').map(Number);
    if (insMajor > reqMajor)
        return true;
    if (insMajor < reqMajor)
        return false;
    if (insMinor > reqMinor)
        return true;
    if (insMinor < reqMinor)
        return false;
    return insPatch >= reqPatch;
}
async function displayPackageComparison(required, installed) {
    if (!installed)
        return { needsInstall: false, missing: { dependencies: [], devDependencies: [] } };
    const missing = { dependencies: [], devDependencies: [] };
    let needsInstall = false;
    console.log('🟤 Package Requirements:');
    // Check dependencies
    if (Object.keys(required.dependencies).length > 0) {
        console.log('   Dependencies:');
        for (const [pkg, version] of Object.entries(required.dependencies)) {
            const installedVersion = installed.dependencies[pkg];
            const status = !installedVersion ?
                `${colors.red}Not installed${colors.reset}` :
                compareVersions(version, installedVersion) ?
                    `${colors.green}✓ ${installedVersion}${colors.reset}` :
                    `${colors.yellow}⚠ ${installedVersion} (needs ${version})${colors.reset}`;
            console.log(`     ${pkg}@${version} → ${status}`);
            if (!installedVersion || !compareVersions(version, installedVersion)) {
                missing.dependencies.push(`${pkg}@${version}`);
                needsInstall = true;
            }
        }
    }
    // Check devDependencies
    if (Object.keys(required.devDependencies).length > 0) {
        console.log('    Dev Dependencies:');
        for (const [pkg, version] of Object.entries(required.devDependencies)) {
            const installedVersion = installed.devDependencies[pkg];
            const status = !installedVersion ?
                `${colors.red}Not installed${colors.reset}` :
                compareVersions(version, installedVersion) ?
                    `${colors.green}✓ ${installedVersion}${colors.reset}` :
                    `${colors.yellow}⚠ ${installedVersion} (needs ${version})${colors.reset}`;
            console.log(`     ${pkg}@${version} → ${status}`);
            if (!installedVersion || !compareVersions(version, installedVersion)) {
                missing.devDependencies.push(`${pkg}@${version}`);
                needsInstall = true;
            }
        }
    }
    return { needsInstall, missing };
}
async function addComponent(component) {
    const framework = component.split(":")[0];
    const componentKey = component.split(":")[1];
    if (!componentKey || !component_list_1.default[componentKey]) {
        console.error(`${colors.red}🔴 Component not found${colors.reset}`);
        process.exit(1);
    }
    if (!component_list_1.FrameworkListType.includes(framework)) {
        console.error(`${colors.red}🔴 Framework not provided${colors.reset}`);
        process.exit(1);
    }
    try {
        // Make API request
        console.info(`🔵 Fetching component from ${colors.blue}${BASE_URL}/${framework}/${componentKey}${colors.reset}`);
        const response = await fetch(`${BASE_URL}/${framework}/${componentKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { data } = await response.json();
        // Create and write files
        for (const file of data.files) {
            const destPath = path_1.default.join(process.cwd(), file.targetPath);
            const destDir = path_1.default.dirname(destPath);
            // Check if file already exists
            if (fs_1.default.existsSync(destPath)) {
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
        // Check required packages
        if (data.packages) {
            const installedPackages = await listDependencies();
            const { needsInstall, missing } = await displayPackageComparison(data.packages, installedPackages);
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
        console.log(`🟢 Component ${colors.green}${componentKey}${colors.reset} added successfully!`);
    }
    catch (error) {
        console.error(`${colors.red}🔴 Error:${colors.reset}`, error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
}
async function listDependencies() {
    try {
        const packageJsonPath = path_1.default.join(process.cwd(), 'package.json');
        if (!fs_1.default.existsSync(packageJsonPath)) {
            console.error(`${colors.red}🔴 No package.json found in current directory${colors.reset}`);
            return;
        }
        const packageJson = JSON.parse(fs_1.default.readFileSync(packageJsonPath, 'utf-8'));
        const dependencies = packageJson.dependencies || {};
        const devDependencies = packageJson.devDependencies || {};
        return { dependencies, devDependencies };
    }
    catch (error) {
        console.error(`${colors.red}🔴 Error reading dependencies:${colors.reset}`, error instanceof Error ? error.message : String(error));
    }
}
