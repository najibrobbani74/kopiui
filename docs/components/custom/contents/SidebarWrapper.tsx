"use client"
import { SidebarMenus, Sidebar, SidebarCollapsibleTriggerMenu, SidebarMenuLink, SidebarCollapsibleMenu, SidebarMenu, SidebarContent } from "@/components/ui/sidebar/Sidebar";
import componentList from "@/settings/component-list";
import { ReactNode } from "react";
import { usePathname } from "next/navigation"


export default function SidebarWrapper({ children }: { children: ReactNode }) {
    const components = Object.keys(componentList).map((key) => componentList[key]);
    const pathname = usePathname();


    return (
        <Sidebar triggerKey="toggle">
            <SidebarMenus>
                <SidebarCollapsibleTriggerMenu isActive={(pathname == "/docs" || pathname == "/docs/introduction")} triggerKey="introduction-menu">
                    <SidebarMenuLink className="font-bold" href="/docs/introduction">Introduction</SidebarMenuLink>
                </SidebarCollapsibleTriggerMenu>
                <SidebarCollapsibleMenu triggerKey="introduction-menu">
                    <SidebarMenu isActive={pathname == "/docs/introduction/installation"} deep={2}>
                        <SidebarMenuLink href="/docs/introduction/installation">Installation</SidebarMenuLink>
                    </SidebarMenu>
                </SidebarCollapsibleMenu>
                <SidebarCollapsibleTriggerMenu isActive={pathname == "/docs/components"} triggerKey="components-menu">
                    <SidebarMenuLink className="font-bold" href="/docs/components">Components</SidebarMenuLink>
                </SidebarCollapsibleTriggerMenu>
                <SidebarCollapsibleMenu triggerKey="components-menu">
                    {components.map((component, index) => {
                        return (
                            <SidebarMenu key={index} isActive={pathname == component.docsPath} deep={2}>
                                <SidebarMenuLink href={component.docsPath}>{component.name}</SidebarMenuLink>
                            </SidebarMenu>
                        )
                    })}
                </SidebarCollapsibleMenu>
            </SidebarMenus>
            <SidebarContent className="lg:px-10 px-2 lg:py-6 py-2">
                {children}
            </SidebarContent>
        </Sidebar>
    );
}

