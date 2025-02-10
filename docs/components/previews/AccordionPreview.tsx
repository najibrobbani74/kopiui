import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/Accordion"

const AccordionPreview = () => {
    return (
        <div className="bg-background max-w-[40rem] rounded-lg">
        <Accordion>
            <AccordionItem defaultOpen={true}>
                <AccordionTrigger>JavaScript</AccordionTrigger>
                <AccordionContent>
                    JavaScript is a versatile programming language that is commonly used for web development. It allows developers to create dynamic and interactive web pages by manipulating the DOM and handling events. JavaScript can be used on both the client-side and server-side, making it a powerful tool for full-stack development.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>React</AccordionTrigger>
                <AccordionContent>
                    React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes. React components are the building blocks of a React application, and they can be composed to create complex UIs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem>
                <AccordionTrigger>Tailwind CSS</AccordionTrigger>
                <AccordionContent>
                    Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS. It allows developers to apply styles directly in the HTML, making it easy to create responsive and consistent designs. Tailwinds approach encourages a more streamlined and maintainable styling process.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    )
}

export default AccordionPreview