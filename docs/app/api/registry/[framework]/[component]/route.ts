import { NextRequest, NextResponse } from "next/server";
import componentList, { FrameworkListType } from "@/settings/component-list";
import { readFile } from "@/utils/files-utils";
export const dynamic = "force-static"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const params: Params[] = []
    Object.keys(componentList).forEach((component) => {
        Object.keys(componentList[component].sourceFiles).forEach((framework) => {
            if (FrameworkListType.includes(framework as typeof FrameworkListType[number])) {
                params.push({ framework: framework as typeof FrameworkListType[number], component });
            }
        });
    });

    return params as Params[];
}

type Props = {
    params: Promise<Params>;
}
type Params = {
    framework: typeof FrameworkListType[number];
    component: string;
}

type FileType = {
    name: string;
    content: string;
    targetPath: string;
}

export async function GET(request: NextRequest, { params }: Props) {
    const framework = (await params).framework; // Ambil dari URL
    const component = (await params).component; // Ambil dari URL

    if (!componentList[component]?.sourceFiles?.[framework]) {
        return NextResponse.json({
            error: "Component not found"
        }, { status: 404 });
    }
    
    const files: FileType[] = await Promise.all(componentList[component].sourceFiles[framework].map(async (file) => {
        return {
            name: file.name,
            content: await readFile(file.sourcePath),
            targetPath: file.targetPath
        }
    }));

    return NextResponse.json({
        data: {
            files
        }
    });
}
