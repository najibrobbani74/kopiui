import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import AlertPreview from "@/components/previews/AlertPreview"
import CodeBlock from "@/components/ui/code-block/CodeBlock"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"

const AlertComponentPage = () => {
    const usageCode = componentPreviews["alert"]
    const tsxCode = tsxCodes["alert"]
    return (
        <>
            <Heading>Alert</Heading>
            <hr />
            <PreviewBox childClassname="rounded-lg bg-transparent max-w-[40rem]">
                <AlertPreview />
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

export default AlertComponentPage