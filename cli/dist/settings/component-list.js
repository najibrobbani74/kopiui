"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameworkListType = void 0;
exports.FrameworkListType = ["nextjs-ts"];
const componentList = {
    "accordion": {
        name: "Accordion",
        key: "accordion",
        docsPath: "/docs/components/accordion",
        previewFilePath: "./components/previews/AccordionPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "AccordionPreview.tsx",
                    title: "Usage",
                    sourcePath: process.cwd() + "/components/previews/AccordionPreview.tsx",
                    targetPath: "/components/previews/AccordionPreview.tsx"
                },
                {
                    name: "Accordion.tsx",
                    title: "TSX",
                    sourcePath: process.cwd() + "/components/ui/accordion/Accordion.tsx",
                    targetPath: "/components/ui/accordion/Accordion.tsx",
                },
                {
                    name: "utils.ts",
                    title: "Utils",
                    sourcePath: process.cwd() + "/lib/utils.ts",
                    targetPath: "/lib/utils.ts",
                }
            ],
        }
    },
    "alert": {
        name: "Alert",
        key: "alert",
        docsPath: "/docs/components/alert",
        previewFilePath: "./components/previews/AlertPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "AlertPreview.tsx",
                    title: "Usage",
                    sourcePath: process.cwd() + "/components/previews/AlertPreview.tsx",
                    targetPath: "/components/previews/AlertPreview.tsx"
                },
                {
                    name: "Alert.tsx",
                    title: "TSX",
                    sourcePath: process.cwd() + "/components/ui/alert/Alert.tsx",
                    targetPath: "/components/ui/alert/Alert.tsx",
                },
                {
                    name: "utils.ts",
                    title: "Utils",
                    sourcePath: process.cwd() + "/lib/utils.ts",
                    targetPath: "/lib/utils.ts",
                }
            ],
        }
    },
    "alert-dialog": {
        name: "Alert Dialog",
        key: "alert-dialog",
        docsPath: "/docs/components/alert-dialog",
        previewFilePath: "./components/previews/AlertDialogPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "AlertDialogPreview.tsx",
                    title: "Usage",
                    sourcePath: process.cwd() + "/components/previews/AlertDialogPreview.tsx",
                    targetPath: "/components/previews/AlertDialogPreview.tsx"
                },
                {
                    name: "AlertDialog.tsx",
                    title: "TSX",
                    sourcePath: process.cwd() + "/components/ui/alert-dialog/AlertDialog.tsx",
                    targetPath: "/components/ui/alert-dialog/AlertDialog.tsx",
                },
                {
                    name: "utils.ts",
                    title: "Utils",
                    sourcePath: process.cwd() + "/lib/utils.ts",
                    targetPath: "/lib/utils.ts",
                }
            ],
        }
    },
};
exports.default = componentList;
