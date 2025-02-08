type ComponentListType = {
    [key: string]: ComponentType
}
type ComponentType = {
    name: string
    key: string
    docsPath: string
    previewFilePath: string
    sourceFiles: SourceFilesType
    packages: PackagesType
}
export const FrameworkListType = ["nextjs-ts"] as const
type PackagesType = {
    [key in typeof FrameworkListType[number]]: {
        dependencies:{
            [key: string]: string
        },
        devDependencies:{
            [key: string]: string
        }
    }
}
type SourceFilesType = {
    [key in typeof FrameworkListType[number]]: FileType[]
}
export type FileType = {
    name: string;
    title: string;
    sourcePath: string;
    targetPath: string;
}


type ResponseErrorType = {
    errors: string[];
}
export type ResponseBodyType = {
    data: ResponseDataType;
}
type ResponseDataType = {
    files: ResponseFileType[];
    packages: {
        dependencies: { [key: string]: string };
        devDependencies: { [key: string]: string };
    };
}
export type ResponseFileType = {
    name: string;
    content: string;
    targetPath: string;
}

const componentList: ComponentListType = {
    "accordion": {
        name: "Accordion",
        key: "accordion",
        docsPath: "/docs/components/accordion",
        previewFilePath: "./components/previews/AccordionPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name:"AccordionPreview.tsx",
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
        },
        packages: {
            "nextjs-ts": {
                dependencies: {
                    "clsx": "^2.1.1",
                    "tailwind-merge": "^3.0.1"
                },
                devDependencies: {}
            }
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
                    name:"AlertPreview.tsx",
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
        },
        packages: {
            "nextjs-ts": {
                dependencies: {
                    "clsx": "^2.1.1",
                    "tailwind-merge": "^3.0.1"
                },
                devDependencies: {}
            }
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
                    name:"AlertDialogPreview.tsx",
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
        },
        packages: {
            "nextjs-ts": {
                dependencies: {
                    "clsx": "^2.1.1",
                    "tailwind-merge": "^3.0.1"
                },
                devDependencies: {}
            }
        }
    },
}

export default componentList