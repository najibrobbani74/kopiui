import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import AlertDialogPreview from "@/components/previews/AlertDialogPreview"
import CodeBlock from "@/components/ui/code-block/CodeBlock"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/Tabs"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"

const AlertDialogComponentPage = () => {
    const usageCode = componentPreviews["alert-dialog"]
    const tsxCode = tsxCodes["alert-dialog"]
    return (
        <>
            <Heading>Alert Dialog</Heading>
            <hr />
            <PreviewBox childClassname="rounded-lg bg-transparent max-w-[40rem]">
                <AlertDialogPreview />
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

export default AlertDialogComponentPage