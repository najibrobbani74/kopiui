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
        dependencies: {
            [key: string]: string
        },
        devDependencies: {
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
function keyToTitle(key: string): string {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function keyToComponentName(key: string): string {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
const getComponentType = (name: string) => {
    const componentName = keyToComponentName(name);
    const title = keyToTitle(name);
    return {
        name: title,
        key: name,
        docsPath: `/docs/components/${name}`,
        previewFilePath: `./components/previews/${componentName}Preview.tsx`,
        sourceFiles: {
            "nextjs-ts": (() => {
                const sourceFiles: FileType[] = [
                    {
                        name: `${componentName}Preview.tsx`,
                        title: "Usage",
                        sourcePath: `${process.cwd()}/components/previews/${componentName}Preview.tsx`,
                        targetPath: `/components/previews/${componentName}Preview.tsx`
                    },
                    {
                        name: `${componentName}.tsx`,
                        title: "TSX",
                        sourcePath: `${process.cwd()}/components/ui/${name}/${componentName}.tsx`,
                        targetPath: `/components/ui/${name}/${componentName}.tsx`,
                    },
                    {
                        name: "utils.ts",
                        title: "Utils",
                        sourcePath: process.cwd() + "/lib/utils.ts",
                        targetPath: "/lib/utils.ts",
                    }
                ]
                return sourceFiles
            })(),
        },
        packages: {
            "nextjs-ts": {
                dependencies: (() => {
                    const dependencies = {
                        "clsx": "^2.1.1",
                        "tailwind-merge": "^3.0.1"
                    }
                    return dependencies
                })(),
                devDependencies: {}
            }
        }
    }
}
const componentList: ComponentListType = {
    "accordion": getComponentType("accordion"),
    "alert": getComponentType("alert"),
    "alert-dialog": getComponentType("alert-dialog"),
}
export const initSetup: {
    sourceFiles: SourceFilesType
    packages: PackagesType

} = {
    sourceFiles: {
        "nextjs-ts": [
            {
                name: "globals.css",
                title: "CSS",
                sourcePath: process.cwd() + "/app/globals.css",
                targetPath: "/app/globals.css",
            },
            {
                name: "tailwind.config.ts",
                title: "Tailwind Config",
                sourcePath: process.cwd() + "/tailwind.config.ts",
                targetPath: "/tailwind.config.ts",
            }
        ]
    },
    packages: {
        "nextjs-ts": {
            dependencies: {},
            devDependencies: {}
        }
    }
}
export default componentList