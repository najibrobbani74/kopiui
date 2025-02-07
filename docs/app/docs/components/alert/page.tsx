import Heading from "@/components/custom/contents/Heading"
import PreviewBox from "@/components/custom/contents/PreviewBox"
import TabsCodeList from "@/components/custom/contents/TabsCodeList"
import AlertPreview from "@/components/previews/AlertPreview"
import componentList from "@/settings/component-list"
import { componentPreviews, tsxCodes } from "@/settings/generated-code"

const AlertComponentPage = () => {
    return (
        <>
            <Heading>Accordion</Heading>
            <hr />
            <PreviewBox childClassname="bg-transparent">
                <AlertPreview />
            </PreviewBox>
            <TabsCodeList files={componentList["alert"].sourceFiles["nextjs-ts"]} />
        </>
    )
}

export default AlertComponentPage