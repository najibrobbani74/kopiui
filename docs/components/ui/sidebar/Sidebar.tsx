"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { createContext, FC, forwardRef, HTMLProps, ReactNode, useContext, useState } from 'react'

interface SidebarProps extends HTMLProps<HTMLDivElement> {
    triggerKey?: string
}

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(({ children, triggerKey, className = "", ...props }, ref) => {
    return (
        <IsSidebarOpenProvider checkboxId={triggerKey}>
            <div className={cn('flex flex-row items-stretch justify-stretch min-h-screen', className)} ref={ref} {...props}>
                {children}
            </div>
        </IsSidebarOpenProvider>
    )
})
Sidebar.displayName = 'Sidebar';

interface SidebarMenuProps extends HTMLProps<HTMLDivElement> {
    isActive?: boolean
    deep?: number
}
const SidebarMenu = forwardRef<HTMLDivElement, SidebarMenuProps>(({ children, className = "", deep = 1, isActive = false, ...props }, ref) => {
    return (
        <div style={{
            paddingLeft: `${deep * 16}px`
        }} className={cn('w-full flex items-center h-10 hover:bg-primary hover:text-primary-foreground', isActive ? "bg-primary text-primary-foreground" : "", className)} ref={ref} {...props}>
            {children}
        </div>
    )
})
SidebarMenu.displayName = 'SidebarMenu';

const SidebarContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
    return (
        <div className={cn('w-full lg:w-4/5', className)} ref={ref} {...props}>
            {children}
        </div>
    )
})
SidebarContent.displayName = 'SidebarContent';

const SidebarMenus = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, ...props }, ref) => {
    return (
        <SidebarPanel ref={ref} {...props}>
            <div className='hidden max-lg:flex justify-end'>
                <SidebarCloseButton />
            </div>
            {children}
        </SidebarPanel>
    )
})
SidebarMenus.displayName = 'SidebarMenus';

const SidebarTriggerButton = forwardRef<HTMLLabelElement, SidebarTriggerProps>(({ className = "", children, ...props }, ref) => {
    return (
        <SidebarTrigger className={cn('h-full w-16 flex justify-center items-center', className)} ref={ref} {...props}>
            <svg className='fill-foreground' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
            </svg>
        </SidebarTrigger>
    )
})
SidebarTriggerButton.displayName = 'SidebarTriggerButton';

const SidebarCloseButton = forwardRef<HTMLLabelElement, HTMLProps<HTMLLabelElement>>(({ className = "", children, ...props }, ref) => {
    return (
        <SidebarTrigger className={cn('h-full w-16 flex justify-center items-center p-4', className)} ref={ref} {...props}>
            <svg className='fill-foreground' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
        </SidebarTrigger>
    )
})
SidebarCloseButton.displayName = 'SidebarCloseButton';

const SidebarMenuLink = forwardRef<HTMLAnchorElement, HTMLProps<HTMLAnchorElement> & { href: string }>(({ className = "", children, href, ...props }, ref) => {
    return (
        <Link href={href} className={className} ref={ref} {...props}>
            {children}
        </Link>
    )
})
SidebarMenuLink.displayName = 'SidebarMenuLink';

const IsSidebarOpenContext = createContext<{
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggleId?: string | null;
} | null>(null)

const IsSidebarOpenProvider: FC<{ children: ReactNode, checkboxId?: string }> = ({ children, checkboxId = null }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    return (
        <IsSidebarOpenContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, toggleId: checkboxId }}>
            {checkboxId ? <input className='hidden' type='checkbox' checked={isSidebarOpen} onChange={() => setIsSidebarOpen(!isSidebarOpen)} id={checkboxId} /> : null}
            {children}
        </IsSidebarOpenContext.Provider>
    )
}

const SidebarPanel = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, ...props }, ref) => {
    const context = useContext(IsSidebarOpenContext);
    if (!context) throw new Error('SidebarPanel must be used within an IsSidebarOpenProvider');
    const { isSidebarOpen } = context;
    return (
        <div ref={ref} {...props} className={cn(
            'max-lg:fixed max-lg:h-screen z-20 overflow-x-scroll bg-background w-screen max-lg:top-0 flex flex-col overflow-hidden border-r transition-[width,right] overflow-y-scroll',
            isSidebarOpen ? "lg:w-1/5  max-lg:right-[100vw]" : "lg:w-0 max-lg:right-[0rem]"
        )}>
            {children}
        </div>
    )
});
SidebarPanel.displayName = 'SidebarPanel';

interface SidebarTriggerProps extends HTMLProps<HTMLLabelElement> {
    triggerKey?: string
}

const SidebarTrigger = forwardRef<HTMLLabelElement, SidebarTriggerProps>(({ children, triggerKey = "", ...props }, ref) => {
    const context = useContext(IsSidebarOpenContext);
    let labelFor = ""
    if (context) {
        const { isSidebarOpen, setIsSidebarOpen, toggleId } = context;
        labelFor = toggleId ?? ""
    }
    return (
        <label htmlFor={triggerKey ? triggerKey : labelFor ?? ""} ref={ref} {...props}>
            {children}
        </label>
    )
});
SidebarTrigger.displayName = 'SidebarTrigger';

interface SidebarCollapsibleMenuProps extends HTMLProps<HTMLDivElement> {
    triggerKey: string
}
const SidebarCollapsibleMenu = forwardRef<HTMLDivElement, SidebarCollapsibleMenuProps>(({ triggerKey = "", className = "", children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div ref={ref} className={cn('grid transition-[grid-template-rows]', isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]", className)} {...props}>
            <input type="checkbox" className='hidden' id={triggerKey} onChange={() => setIsOpen(!isOpen)} />
            <div className={"overflow-hidden"} >
                {children}
            </div>
        </div>
    )
})
SidebarCollapsibleMenu.displayName = 'SidebarCollapsibleMenu';

interface SidebarCollapsibleTriggerMenuProps extends SidebarMenuProps {
    triggerKey: string
}
const SidebarCollapsibleTriggerMenu = forwardRef<HTMLDivElement, SidebarCollapsibleTriggerMenuProps>(({ triggerKey = "", className = "", children, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <SidebarMenu onClick={() => setIsOpen(!isOpen)} ref={ref} {...props}>
            <label className={"w-full h-full flex items-center "} htmlFor={triggerKey ? triggerKey : ""}>
                {children}
                <svg
                    style={{
                        transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)"
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-auto mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 01-1.414 0l-4-4a1 1 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
        </SidebarMenu>
    )
})
SidebarCollapsibleTriggerMenu.displayName = 'SidebarCollapsibleTriggerMenu';

export { Sidebar, SidebarCloseButton, SidebarCollapsibleMenu, SidebarCollapsibleTriggerMenu, SidebarContent, SidebarMenu, SidebarMenuLink, SidebarMenus, SidebarTriggerButton }

