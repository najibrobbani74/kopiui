"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSetup = exports.FrameworkListType = void 0;
exports.FrameworkListType = ["nextjs-ts"];
function keyToTitle(key) {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function keyToComponentName(key) {
    return key.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
const getComponentType = (name) => {
    const componentName = keyToComponentName(name);
    const title = keyToTitle(name);
    return {
        name: title,
        key: name,
        docsPath: `/docs/components/${name}`,
        previewFilePath: `./components/previews/${componentName}Preview.tsx`,
        sourceFiles: {
            "nextjs-ts": (() => {
                const sourceFiles = [
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
                ];
                return sourceFiles;
            })(),
        },
        packages: {
            "nextjs-ts": {
                dependencies: (() => {
                    const dependencies = {
                        "clsx": "^2.1.1",
                        "tailwind-merge": "^3.0.1"
                    };
                    return dependencies;
                })(),
                devDependencies: {}
            }
        }
    };
};
const componentList = {
    "accordion": getComponentType("accordion"),
    "alert": getComponentType("alert"),
    "alert-dialog": getComponentType("alert-dialog"),
};
exports.initSetup = {
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
};
exports.default = componentList;
