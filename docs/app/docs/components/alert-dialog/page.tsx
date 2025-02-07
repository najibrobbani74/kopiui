import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import TabsCodeList from "@/components/custom/contents/TabsCodeList"
import AlertDialogPreview from "@/components/previews/AlertDialogPreview"
import componentList from "@/settings/component-list"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"

const AlertDialogComponentPage = () => {
    return (
        <>
            <Heading>Accordion</Heading>
            <hr />
            <PreviewBox childClassname="rounded-lg bg-background max-w-[40rem]">
                <AlertDialogPreview />
            </PreviewBox>
            <TabsCodeList files={componentList["alert-dialog"].sourceFiles["nextjs-ts"]} />
        </>
    )
}

export default AlertDialogComponentPage