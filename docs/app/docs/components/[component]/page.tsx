import Heading from "@/components/custom/contents/Heading";
import PreviewBox from "@/components/custom/contents/PreviewBox";
import TabsCodeList from "@/components/custom/contents/TabsCodeList";
import componentList from "@/settings/component-list";
import { keyToTitle } from "@/utils/files-utils";
import { default as dynamicImport } from 'next/dynamic';

export const dynamic = "force-static"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const params: Params[] = []
    Object.keys(componentList).forEach((component) => {
        params.push({ component });
    });
    return params as Params[];
}
type Props = {
    params: Promise<Params>;
}
type Params = {
    component: typeof componentList[keyof typeof componentList]["key"];
}
const ComponentPage = async ({ params }: Props) => {
    const component = (await params).component;
    const title = keyToTitle(component);
    const Preview = dynamicImport(() => import("@/components/previews/" + title.replaceAll(" ","") + "Preview.tsx"));    
    return (
        <>
            <Heading>{title}</Heading>
            <hr />
            <PreviewBox childClassname="bg-transparent">
                <Preview />
            </PreviewBox>
            <TabsCodeList files={componentList[component].sourceFiles["nextjs-ts"]} />
        </>
    )
}
export default ComponentPage