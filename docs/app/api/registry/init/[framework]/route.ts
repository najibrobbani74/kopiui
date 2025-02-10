import { FrameworkListType, initSetup, ResponseFileType } from "@/settings/component-list";
import { readFile } from "@/utils/files-utils";
import { NextRequest, NextResponse } from "next/server";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const params: Params[] = FrameworkListType.map((framework) => {
        return { framework };
    })
    return params as Params[];
}

type Props = {
    params: Promise<Params>;
}
type Params = {
    framework: typeof FrameworkListType[number];
}

export async function GET(request: NextRequest, { params }: Props) {
    const framework = (await params).framework; // Ambil dari URL

    if (!FrameworkListType.includes(framework as typeof FrameworkListType[number])) {
        return NextResponse.json({
            error: "Framework not found"
        }, { status: 404 });
    }
    const initFiles = initSetup.sourceFiles[framework]; 

    const files: ResponseFileType[] = await Promise.all(initFiles.map(async (file) => {
        return {
            name: file.name,
            content: await readFile(file.sourcePath),
            targetPath: file.targetPath
        }
    }));

    const packages = initSetup.packages[framework];

    return NextResponse.json({
        data: {
            files,
            packages,
        }
    });
}