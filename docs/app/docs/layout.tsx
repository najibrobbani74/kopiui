import Logo from "@/components/custom/logo/Logo"
import { NavbarHeader, NavbarLink, NavbarMenu, NavbarMenus, StaticNavbar } from "@/components/ui/navbar/Navbar"
import { SearchModalTrigger, SearchModal } from "@/components/ui/search-modal/SearchModal"
import { SidebarTriggerButton } from "@/components/ui/sidebar/Sidebar"
import componentList from "@/settings/component-list"
import { ReactNode } from "react"
import SidebarWrapper from "@/components/custom/contents/SidebarWrapper"
import DayNightToggle from "@/components/ui/theme-toggle/day-night/DayNightToggle"

export default function DocsLayout({ children }: { children: ReactNode }) {
    const components = Object.keys(componentList).map((key) => componentList[key]);

    return (
        <>
            <StaticNavbar>
                <NavbarHeader>
                    <SidebarTriggerButton triggerKey="toggle" className="lg:hidden" />
                    <Logo />
                </NavbarHeader>
                <NavbarMenus>
                    <NavbarMenu>
                        <NavbarLink href="/docs">Docs</NavbarLink>
                    </NavbarMenu>
                    <NavbarMenu className='mr-auto'>
                        <NavbarLink href="/docs/components">Components</NavbarLink>
                    </NavbarMenu>
                    <NavbarMenu>
                        <SearchModalTrigger triggerKey="search-modal" />
                        <SearchModal data={components.map((component) => {
                            return {
                                title: component.name,
                                link: component.docsPath
                            }
                        })} triggerKey="search-modal" />
                    </NavbarMenu>
                    <NavbarMenu>
                        <DayNightToggle defaultTheme="dark" />
                    </NavbarMenu>
                </NavbarMenus>
            </StaticNavbar>
            <SidebarWrapper>
                {children}
            </SidebarWrapper>
        </>
    )
}
