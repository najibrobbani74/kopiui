import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import componentList, { FrameworkListType } from "../settings/component-list";

const BASE_URL = "https://kopiui.najibrobbani.site/api/registry"; // adjust as needed

type ResponseBodyType = {
  data: {
    files: Array<{
      name: string;
      content: string;
      targetPath: string;
    }>;
    dependencies: string[];
  };
}

export async function addComponent(component: string) {
  const framework = component.split(":")[0];
  const componentKey = component.split(":")[1];


  if (!componentList[componentKey]) {
    console.error(`❌ Component '${componentKey}' not found in component list`);
    process.exit(1);
  }
  if (!FrameworkListType.includes(framework as typeof FrameworkListType[number])) {
    console.error(`❌ Framework not provided`);
    process.exit(1);
  }

  try {
    // Make API request
    console.log(`${BASE_URL}/${framework}/${componentKey}`);
    const response = await fetch(`${BASE_URL}/${framework}/${componentKey}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json() as ResponseBodyType;

    // Create and write files
    for (const file of data.files) {
      const destPath = path.join(process.cwd(), file.targetPath);
      const destDir = path.dirname(destPath);

      // Ensure directory exists
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      // Write file
      fs.writeFileSync(destPath, file.content);
      console.log(`✅ Created ${file.name}`);
    }

    // Install dependencies if any
    if (data.dependencies && data.dependencies.length > 0) {
      console.log("📦 Installing dependencies...");
      execSync(`npm install ${data.dependencies.join(" ")}`, { stdio: "inherit" });
      console.log("✅ Dependencies installed");
    }

    console.log(`✨ Component ${componentKey} added successfully!`);

  } catch (error) {
    console.error("❌ Error:", error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}