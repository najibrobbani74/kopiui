import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import axios from "axios";
import componentList from "../settings/component-list";

const BASE_URL = "http://localhost:3000/api"; // adjust as needed

type ResponseBodyType = {
  data: ResponseDataType;
}

type ResponseErrorType = {
  errors: string[];
}

type ResponseDataType = {
  files: FilesType[];
  dependencies: string[];
}

type FilesType = {
  name: string;
  content: string;
  targetPath: string;
}

export async function addComponent(componentKey: string) {
  // Check if component exists in componentList
  if (!componentList[componentKey]) {
    console.error(`❌ Component '${componentKey}' not found in component list`);
    process.exit(1);
  }

  try {
    // Make API request
    const response = await axios.get<ResponseBodyType>(`${BASE_URL}/components/${componentKey}`);
    const { files, dependencies } = response.data.data;

    // Create and write files
    for (const file of files) {
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
    if (dependencies.length > 0) {
      console.log("📦 Installing dependencies...");
      execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
      console.log("✅ Dependencies installed");
    }

    console.log(`✨ Component ${componentKey} added successfully!`);

  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data) {
      const errorData = error.response.data as ResponseErrorType;
      console.error("❌ Error:", errorData.errors.join(", "));
    } else {
      console.error("❌ Error:", error);
    }
    process.exit(1);
  }
}