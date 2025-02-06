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

type SourceFilesType = {
    [key in "nextjs-ts"]: FileType[]
}
type FileType = {
    name: string;
    extension: string;
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
        previewFilePath: "/components/previews/AccordionPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "Accordion.tsx",
                    extension: "tsx",
                    sourcePath: "/nextjs-ts/accordion/Accordion.tsx",
                    targetPath: "/components/ui/accordion/Accordion.tsx",
                },
            ],
        }
    },
    "alert": {
        name: "Alert",
        key: "alert",
        docsPath: "/docs/components/alert",
        previewFilePath: "/components/previews/AlertPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "Alert.tsx",
                    extension: "tsx",
                    sourcePath: "/components/ui/alert/Alert.tsx",
                    targetPath: "/components/ui/alert/Alert.tsx",
                },
            ],
        }
    },
    "alert-dialog": {
        name: "Alert Dialog",
        key: "alert-dialog",
        docsPath: "/docs/components/alert-dialog",
        previewFilePath: "/components/previews/AlertDialogPreview.tsx",
        sourceFiles: {
            "nextjs-ts": [
                {
                    name: "AlertDialog.tsx",
                    extension: "tsx",
                    sourcePath: "/components/ui/alert-dialog/AlertDialog.tsx",
                    targetPath: "/components/ui/alert-dialog/AlertDialog.tsx",
                },
            ],
        }
    },
}

export default componentList