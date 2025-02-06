import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import AccordionPreview from "@/components/previews/AccordionPreview"
import CodeBlock from "@/components/ui/code-block/CodeBlock"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs"
import { PACKAGE_BASE_PATH } from "@/lib/constants"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"

const AccordionComponentPage = () => {
    const usageCode = componentPreviews["accordion"]
    const tsxCode = tsxCodes["accordion"]
    console.log(PACKAGE_BASE_PATH);
    
    return (
        <>
            <Heading>Accordion</Heading>
            <hr />
            <PreviewBox childClassname="rounded-lg bg-background max-w-[40rem]">
                <AccordionPreview />
            </PreviewBox>
            <Tabs defaultKey="usage">
                <TabsList>
                    <TabsTrigger triggerKey="usage">Usage</TabsTrigger>
                    <TabsTrigger triggerKey="tsx">TSX</TabsTrigger>
                </TabsList>
                <TabsContent triggerKey="usage">
                    <CodeBlock language="tsx">
                        {usageCode}
                    </CodeBlock>
                </TabsContent>
                <TabsContent triggerKey="tsx">
                    <CodeBlock language="tsx">
                        {tsxCode}
                    </CodeBlock>
                </TabsContent>
            </Tabs>
        </>
    )
}

export default AccordionComponentPage