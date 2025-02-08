import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import inquirer from "inquirer";
import componentList, { FrameworkListType, ResponseBodyType } from "../settings/component-list";

const BASE_URL = "https://kopiui.najibrobbani.site/api/registry"; // adjust as needed

const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function compareVersions(required: string, installed: string): boolean {
  const cleanRequired = required.replace(/[\^~]/g, '');
  const cleanInstalled = installed.replace(/[\^~]/g, '');
  
  const [reqMajor, reqMinor, reqPatch] = cleanRequired.split('.').map(Number);
  const [insMajor, insMinor, insPatch] = cleanInstalled.split('.').map(Number);
  
  if (insMajor > reqMajor) return true;
  if (insMajor < reqMajor) return false;
  if (insMinor > reqMinor) return true;
  if (insMinor < reqMinor) return false;
  return insPatch >= reqPatch;
}

async function displayPackageComparison(
  required: { dependencies: { [key: string]: string }, devDependencies: { [key: string]: string } },
  installed: { dependencies: { [key: string]: string }, devDependencies: { [key: string]: string } } | undefined
) {
  if (!installed) return { needsInstall: false, missing: { dependencies: [], devDependencies: [] }};
  
  const missing = { dependencies: [] as string[], devDependencies: [] as string[] };
  let needsInstall = false;

  console.log('\n📦 Package Requirements:');
  
  // Check dependencies
  if (Object.keys(required.dependencies).length > 0) {
    console.log('\nDependencies:');
    for (const [pkg, version] of Object.entries(required.dependencies)) {
      const installedVersion = installed.dependencies[pkg];
      const status = !installedVersion ? 
        `${colors.red}Not installed${colors.reset}` :
        compareVersions(version, installedVersion) ? 
          `${colors.green}✓ ${installedVersion}${colors.reset}` :
          `${colors.yellow}⚠ ${installedVersion} (needs ${version})${colors.reset}`;
      
      console.log(`  ${pkg}@${version} → ${status}`);
      
      if (!installedVersion || !compareVersions(version, installedVersion)) {
        missing.dependencies.push(`${pkg}@${version}`);
        needsInstall = true;
      }
    }
  }

  // Check devDependencies
  if (Object.keys(required.devDependencies).length > 0) {
    console.log('\nDev Dependencies:');
    for (const [pkg, version] of Object.entries(required.devDependencies)) {
      const installedVersion = installed.devDependencies[pkg];
      const status = !installedVersion ? 
        `${colors.red}Not installed${colors.reset}` :
        compareVersions(version, installedVersion) ? 
          `${colors.green}✓ ${installedVersion}${colors.reset}` :
          `${colors.yellow}⚠ ${installedVersion} (needs ${version})${colors.reset}`;
      
      console.log(`  ${pkg}@${version} → ${status}`);
      
      if (!installedVersion || !compareVersions(version, installedVersion)) {
        missing.devDependencies.push(`${pkg}@${version}`);
        needsInstall = true;
      }
    }
  }

  return { needsInstall, missing };
}

export async function addComponent(component: string) {
  const framework = component.split(":")[0];
  const componentKey = component.split(":")[1];

  if (!componentKey || !componentList[componentKey]) {
    console.error(`${colors.red}🔴 Component not found${colors.reset}`);
    process.exit(1);
  }
  if (!FrameworkListType.includes(framework as typeof FrameworkListType[number])) {
    console.error(`${colors.red}🔴 Framework not provided${colors.reset}`);
    process.exit(1);
  }

  try {
    // Make API request
    console.info(`🚀 Fetching component from ${colors.blue}${BASE_URL}/${framework}/${componentKey}${colors.reset}`);
    const response = await fetch(`${BASE_URL}/${framework}/${componentKey}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json() as ResponseBodyType;

    // Create and write files
    for (const file of data.files) {
      const destPath = path.join(process.cwd(), file.targetPath);
      const destDir = path.dirname(destPath);

      // Check if file already exists
      if (fs.existsSync(destPath)) {
        // Check if file is the same by normalizing whitespace
        const existingContent = fs.readFileSync(destPath, "utf-8");
        const normalizedExisting = existingContent.replace(/\s+/g, ' ').trim();
        const normalizedNew = file.content.replace(/\s+/g, ' ').trim();
        if (normalizedExisting === normalizedNew) {
          console.log(`🟡 Skip ${colors.yellow}${file.targetPath}${colors.reset} Because the file already exists and is the same`);
          continue;
        } else {
          const { action } = await inquirer.prompt([{
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
            fs.writeFileSync(destPath, file.content);
            console.log(`🟢 Replace ${colors.green}${file.name}${colors.reset}`,'');
          } else if (action === 'n') {
            let counter = 1;
            let newDestPath;
            const ext = path.extname(file.name);
            const nameWithoutExt = path.basename(file.name, ext);

            console.log(`🔄 Finding available filename for ${colors.blue}${file.name}${colors.reset}...`);

            do {
              newDestPath = path.join(destDir, `${nameWithoutExt}${counter}${ext}`);
              counter++;
            } while (fs.existsSync(newDestPath));

            fs.writeFileSync(newDestPath, file.content);
            console.log(`🟢 Create ${colors.green}${path.basename(newDestPath)}${colors.reset} (renamed from ${file.name})`);
          } else {
            console.log(`🟡 Skip ${colors.yellow}${file.targetPath}${colors.reset}`);
          }
        }
        continue;
      }

      // Ensure directory exists
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      // Write file
      fs.writeFileSync(destPath, file.content);
      console.log(`🟢 Create ${colors.green}${file.name}${colors.reset}`);
    }
    console.log(data);
    
    // Check required packages
    if (data.packages) {
      console.log('\n📦 Checking required packages...');
      
      const installedPackages = await listDependencies();
      const { needsInstall, missing } = await displayPackageComparison(data.packages, installedPackages);

      if (needsInstall) {
        const { shouldInstall } = await inquirer.prompt([{
          type: 'confirm',
          name: 'shouldInstall',
          message: 'Some required packages are missing or need updating. Would you like to install them?',
          default: true
        }]);

        if (shouldInstall) {
          if (missing.dependencies.length > 0) {
            console.log(`\n📦 Installing dependencies...`);
            execSync(`npm install ${missing.dependencies.join(" ")}`, { stdio: "inherit" });
          }
          
          if (missing.devDependencies.length > 0) {
            console.log(`\n📦 Installing dev dependencies...`);
            execSync(`npm install -D ${missing.devDependencies.join(" ")}`, { stdio: "inherit" });
          }
          
          console.log('✅ Packages installed successfully');
        } else {
          console.log('⚠️ Skipping package installation. Note that the component might not work correctly.');
        }
      } else {
        console.log('\n✅ All required packages are already installed with compatible versions');
      }
    }

    console.log(`✨ Component ${colors.green}${componentKey}${colors.reset} added successfully!`);

  } catch (error) {
    console.error(`${colors.red}🔴 Error:${colors.reset}`, error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

export async function listDependencies() {
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      console.error(`${colors.red}🔴 No package.json found in current directory${colors.reset}`);
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    return { dependencies, devDependencies };
  } catch (error) {
    console.error(`${colors.red}🔴 Error reading dependencies:${colors.reset}`, error instanceof Error ? error.message : String(error));
  }
}