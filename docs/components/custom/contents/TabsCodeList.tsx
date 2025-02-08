import CodeBlock from "@/components/ui/code-block/CodeBlock"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs/Tabs"
import { FileType } from "@/settings/component-list"
import { readFile } from "@/utils/files-utils";

const TabsCodeList = ({ files }: { files: FileType[] }) => {
    const locationDesc = (file: FileType) => {
        if (file.title === "Usage") {
            return ""
        }
        return "// @" + file.targetPath + "\n\n"
    }

    return (
        <Tabs defaultKey="usage">
            <TabsList>
                {files.map((file, i) => (
                    <TabsTrigger key={i} triggerKey={file.title.replaceAll(" ", "-").toLowerCase()}>{file.title.toLowerCase() !== "usage" ? file.name : file.title}</TabsTrigger>
                ))}
            </TabsList>
            {files.map(async (file, i) => (
                <TabsContent key={i} triggerKey={file.title.replaceAll(" ", "-").toLowerCase()}>
                    <CodeBlock language={file.name.split(".")[file.name.split(".").length - 1]} maxHeight={(40 * 1.5) + "rem"} code={locationDesc(file) + (await readFile(file.sourcePath))} />
                </TabsContent>
            ))}
        </Tabs>
    );
};

export default TabsCodeList;