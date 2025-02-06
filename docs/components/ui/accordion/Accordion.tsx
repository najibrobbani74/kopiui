"use client"

import { cn } from "@/lib/utils";
import { createContext, FC, forwardRef, HTMLProps, MouseEvent, ReactNode, useContext, useState } from "react";

const Accordion = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
    return (
        <div className={cn(className, "border rounded-lg first:border-t-0")} ref={ref} {...props}>
            {children}
        </div>
    );
});
Accordion.displayName = "Accordion";

interface AccordionItemProps extends HTMLProps<HTMLDivElement> {
    defaultOpen?: boolean;
}
const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(({ children, defaultOpen = false, className = "", ...props }, ref) => {
    return (
        <IsOpenProvider defaultOpen={defaultOpen}>
            <div ref={ref} className={cn("border-t", className)} {...props}>
                {children}
            </div>
        </IsOpenProvider>
    );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", onClick, ...props }, ref) => {
    const context = useContext(IsOpenContext);
    if (!context) throw new Error('AccordionTrigger must be used within an AccordionItem');
    const { isOpen, setIsOpen } = context;
    function handleClick(e: MouseEvent<HTMLDivElement>) {
        setIsOpen(!isOpen)
        onClick && onClick(e)
    }
    return (
        <div onClick={handleClick} className={cn("px-4 py-2 flex cursor-pointer justify-between items-center hover:bg-primary/30", className)} ref={ref} {...props}>
            <div>
                {children}
            </div>
            <svg
                style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s"
                }}
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-auto mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
    const context = useContext(IsOpenContext);
    if (!context) throw new Error('AccordionContent must be used within an AccordionItem');
    const { isOpen } = context;
    return (
        <div className={cn('grid transition-[grid-template-rows]', isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]", className)}>
            <div className={"overflow-hidden"} >
                <div className="px-4 py-2 border-t">
                    {children}
                </div>
            </div>
        </div>
    );
});
AccordionContent.displayName = "AccordionContent";

const IsOpenContext = createContext<{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null)

const IsOpenProvider: FC<{ children: ReactNode, defaultOpen?: boolean }> = ({ children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    return (
        <IsOpenContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </IsOpenContext.Provider>
    )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

