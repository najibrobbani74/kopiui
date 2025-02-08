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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const component_list_1 = __importStar(require("../settings/component-list"));
const BASE_URL = "http://localhost:3000/api/registry"; // adjust as needed
async function addComponent(component) {
    const framework = component.split(":")[0];
    const componentKey = component.split(":")[1];
    if (!component_list_1.default[componentKey]) {
        console.error(`❌ Component '${componentKey}' not found in component list`);
        process.exit(1);
    }
    if (!component_list_1.FrameworkListType.includes(framework)) {
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
        const { data } = await response.json();
        // Create and write files
        for (const file of data.files) {
            const destPath = path_1.default.join(process.cwd(), file.targetPath);
            const destDir = path_1.default.dirname(destPath);
            // Ensure directory exists
            if (!fs_1.default.existsSync(destDir)) {
                fs_1.default.mkdirSync(destDir, { recursive: true });
            }
            // Write file
            fs_1.default.writeFileSync(destPath, file.content);
            console.log(`✅ Created ${file.name}`);
        }
        // Install dependencies if any
        if (data.dependencies && data.dependencies.length > 0) {
            console.log("📦 Installing dependencies...");
            (0, child_process_1.execSync)(`npm install ${data.dependencies.join(" ")}`, { stdio: "inherit" });
            console.log("✅ Dependencies installed");
        }
        console.log(`✨ Component ${componentKey} added successfully!`);
    }
    catch (error) {
        console.error("❌ Error:", error instanceof Error ? error.message : String(error));
        process.exit(1);
    }
}
