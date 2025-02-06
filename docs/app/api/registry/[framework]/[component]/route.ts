import { NextRequest, NextResponse } from "next/server";
import componentList from "@/settings/component-list";
export const dynamic = "force-static"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const params = Object.keys(componentList).map((component) => ({
        framework: "nextjs", // Assuming "next" is the framework you are using
        component,
    }));

    return params as Params[];
}

type Props = {
    params: Promise<Params>;
}
type Params = {
    framework: string;
    component: string;
}

export async function GET(request: NextRequest, { params }: Props) {
    const framework = (await params).framework; // Ambil dari URL
    const component = (await params).component; // Ambil dari URL

    return NextResponse.json({ framework, component });
}
