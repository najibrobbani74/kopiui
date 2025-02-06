"use client"

import { createContext, FC, forwardRef, HTMLProps, ReactNode, useContext, useState } from "react";
import { cn } from "@/lib/utils"
interface TabProps extends HTMLProps<HTMLDivElement> {
    defaultKey: string
}
const Tabs = forwardRef<HTMLDivElement, TabProps>(({ defaultKey, children, className = "", ...props }, ref) => {
    return (
        <TabKeyProvider defaultKey={defaultKey}>
            <div ref={ref} className={cn("flex flex-col", className)} {...props} >
                {children}
            </div>
        </TabKeyProvider>
    )
})
Tabs.displayName = 'Tabs'
const TabsList = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = "", ...props }, ref) => {
    return (
        <div ref={ref} className={cn("inline-flex border-b justify-start", className)} {...props} />
    )
})
TabsList.displayName = 'TabsList'
interface TabsTriggerProps extends HTMLProps<HTMLDivElement> {
    triggerKey: string
}
const TabsTrigger = forwardRef<HTMLDivElement, TabsTriggerProps>(({ className = "", triggerKey, children, ...props }, ref) => {
    const context = useContext(TabKeyContext);
    if (!context) throw new Error('TabsTrigger must be used within an TabKeyProvider');
    const { tabKey, setTabKey } = context;
    return (
        <div ref={ref} onClick={() => setTabKey(triggerKey)} className={cn(
            "py-2 w-fit cursor-pointer px-4",
            tabKey === triggerKey ? "opacity-100 border-b-2 border-primary" : "opacity-50",
            className
        )} {...props} >
            {children}
        </div>
    )
})
TabsTrigger.displayName = 'TabsTrigger'
interface TabsContentProps extends HTMLProps<HTMLDivElement> {
    triggerKey: string
}
const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(({ className = "",triggerKey, ...props }, ref) => {
    const context = useContext(TabKeyContext);
    if (!context) throw new Error('TabsContent must be used within an TabKeyProvider');
    const { tabKey } = context;
    return (
        <div ref={ref} className={cn(tabKey === triggerKey ? "" : "hidden", "pt-3", className)} {...props} />
    )
})
TabsContent.displayName = 'TabsContent'
const TabKeyContext = createContext<{
    tabKey: string;
    setTabKey: React.Dispatch<React.SetStateAction<string>>;
} | null>(null)

const TabKeyProvider: FC<{ children: ReactNode, defaultKey: string }> = ({ children, defaultKey }) => {
    const [tabKey, setTabKey] = useState(defaultKey)
    return (
        <TabKeyContext.Provider value={{ tabKey, setTabKey }}>
            {children}
        </TabKeyContext.Provider>
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }