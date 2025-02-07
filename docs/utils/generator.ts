// import componentList from "@/settings/component-list";
// import fs from "fs";

// const generatedComponentCodeJSONPath = "./settings/generated-code.ts";
// const generatedComponentCodeJSONTemplatePath = "./utils/generated-code.txt";

// // Fungsi untuk menulis ke file
// const writeFile = async (filePath: string, content: string): Promise<void> => {
//     try {
//         await fs.promises.writeFile(filePath, content);
//     } catch (err) {
//         console.error("Gagal menulis file:", err);
//     }
// };

// // Fungsi untuk membaca file
// const readFile = async (filePath: string): Promise<string | null> => {
//     try {
//         const data = await fs.promises.readFile(filePath, "utf8");
//         return data;
//     } catch (err) {
//         console.error("Gagal membaca file:", err);
//         return null;
//     }
// };
// interface ComponentPreviews {
//     [key: string]: string
// }
// interface TsxCodes {
//     [key: string]: string
// }
// const componentPreviews: ComponentPreviews = {}
// const tsxCodes: TsxCodes = {}

// async function main() {
//     let templateContent = await readFile(generatedComponentCodeJSONTemplatePath)
//     for (const key in componentList){
//         const item = componentList[key]
//         const previewContent = await readFile("."+item.previewFilePath)
//         const tsxContent = await readFile("."+item.tsxFilePath)
//         componentPreviews[item.key] = previewContent ?? ""
//         tsxCodes[item.key] = tsxContent ?? ""
//     }
//     templateContent = (templateContent ?? "").replace("{{preview-data}}", JSON.stringify(componentPreviews, null, 4))
//     templateContent = (templateContent ?? "").replace("{{tsx-data}}", JSON.stringify(tsxCodes, null, 4))
//     await writeFile(generatedComponentCodeJSONPath, templateContent ?? "")
// }

// main();