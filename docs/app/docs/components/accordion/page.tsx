import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import TabsCodeList from "@/components/custom/contents/TabsCodeList"
import AccordionPreview from "@/components/previews/AccordionPreview"
import CodeBlock from "@/components/ui/code-block/CodeBlock"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs"
import { PACKAGE_BASE_PATH, PROJECT_PATH } from "@/lib/constants"
import componentList from "@/settings/component-list"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"
import { readFile } from "@/utils/files-utils"

const AccordionComponentPage = async () => {
    return (
        <>
            <Heading>Accordion</Heading>
            <hr />
            <PreviewBox childClassname="rounded-lg bg-background max-w-[40rem]">
                <AccordionPreview />
            </PreviewBox>
            <TabsCodeList files={componentList["accordion"].sourceFiles["nextjs-ts"]} />
        </>
    )
}

export default AccordionComponentPage