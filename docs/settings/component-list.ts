type ComponentListType = {
    [key: string]: ComponentType
}
type ComponentType = {
    name: string
    key: string
    docsPath: string
    previewFilePath: string
    sourceFiles: SourceFilesType
}

export const FrameworkList = ["nextjs-ts"] as const
type SourceFilesType = {
    [key in typeof FrameworkList[number]]: FileType[]
}
export type FileType = {
    name: string;
    title: string;
    sourcePath: string;
    targetPath: string;
}
type ResponseBodyType = {
    data: ResponseDataType;
}


type ResponseErrorType = {
    errors: string[];
}

type ResponseDataType = {
    files: FileType[];
    dependencies: string[];
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
                    name: "utils.tsx",
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
                    name: "utils.tsx",
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
                    name: "utils.tsx",
                    title: "Utils",
                    sourcePath: process.cwd() + "/lib/utils.ts",
                    targetPath: "/lib/utils.ts",
                }
            ],
        }
    },
}

export default componentList