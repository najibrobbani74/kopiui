"use client"

import React, { AnchorHTMLAttributes, createContext, FC, ForwardedRef, forwardRef, HTMLProps, ReactNode, useContext, useState, } from 'react'

const StaticNavbar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <IsMobileMenuOpenProvider>
            <div ref={ref} className={"w-full min-w-[20rem] border-b flex flex-col lg:flex-row bg-background overflow-hidden " + className} {...props}>
                {children}
            </div>
        </IsMobileMenuOpenProvider>
    )
})

const FloatingNavbar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <IsMobileMenuOpenProvider>
            <div ref={ref} className={"w-full min-w-[20rem] border-b flex flex-col lg:flex-row bg-background overflow-hidden fixed top-0 z-10 " + className} {...props}>
                {children}
            </div>
        </IsMobileMenuOpenProvider>
    )
})

const NavbarHeader = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={"flex h-16 flex-row justify-between items-center " + className} ref={ref} {...props} >
            {children}
            <NavbarTrigger>
                <RightMobileMenuNavbar />
            </NavbarTrigger>
        </div>
    )
})
const NavbarMenu = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={'py-1 flex justify-center items-center max-lg:mx-auto px-2 ' + className} ref={ref} {...props} />
    )
})

const NavbarMenus = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <NavbarMenusCollapsible>
            <div className={'flex lg:flex-row flex-col lg:h-16 w-full ' + className} ref={ref} {...props} >
                {children}
            </div>
        </NavbarMenusCollapsible>
    )
})

interface NavbarLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    isActive?: boolean
}
const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(({ children, className = "", isActive = false, ...props }, ref) => {
    return (
        <a className={"text-foreground hover:opacity-100 " + (isActive ? "opacity-100" : "opacity-70") + className} ref={ref} {...props}>
            {children}
        </a>
    )
})
NavbarLink.displayName = 'NavbarLink'

const LeftMobileMenuNavbar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={'hidden max-lg:flex min-w-16 h-full ' + className} ref={ref} {...props}>
            {children}
        </div>
    )
})

const RightMobileMenuNavbar = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ className = '', children, ...props }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={'h-full min-w-16 hidden max-lg:flex justify-center items-center cursor-pointer text-foreground ' + className} {...props} ref={ref} >
            <svg className='fill-foreground px-1' viewBox="0 0 256 256" width="35" height="35" xmlns="http://www.w3.org/2000/svg"><path d="M156,128a28,28,0,1,1-28-28A28.1,28.1,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.1,28.1,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.1,28.1,0,0,0,208,100Z" /></svg>
        </div>
    )
})

const IsMobileMenuOpenContext = createContext<{
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null)

const IsMobileMenuOpenProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <IsMobileMenuOpenContext.Provider value={{ isMobileMenuOpen, setIsMobileMenuOpen }}>
            {children}
        </IsMobileMenuOpenContext.Provider>
    )
}

const NavbarTrigger: FC<{ children: ReactNode }> = ({ children }) => {
    const context = useContext(IsMobileMenuOpenContext);
    if (!context) throw new Error('NavbarTrigger must be used within an IsMobileMenuOpenProvider');
    const { isMobileMenuOpen, setIsMobileMenuOpen } = context;
    return (
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{children}</button>
    )
}

const NavbarMenusCollapsible: FC<{ children: ReactNode }> = ({ children }) => {
    const context = useContext(IsMobileMenuOpenContext);
    if (!context) throw new Error('NavbarTrigger must be used within an IsMobileMenuOpenProvider');
    const { isMobileMenuOpen, setIsMobileMenuOpen } = context;
    return (
        <div className={'grid transition-[grid-template-rows] grid-rows-[1fr] w-full h-full ' + (isMobileMenuOpen ? "max-lg:grid-rows-[1fr]" : "max-lg:grid-rows-[0fr]")}>
            <div className={"overflow-hidden"} >
                {children}
            </div>
        </div>
    )
}

StaticNavbar.displayName = 'StaticNavbar'
FloatingNavbar.displayName = 'FloatingNavbar'
NavbarHeader.displayName = 'NavbarHeader'
NavbarMenu.displayName = 'NavbarMenu'
NavbarMenus.displayName = 'NavbarMenus'
NavbarLink.displayName = 'NavbarLink'
LeftMobileMenuNavbar.displayName = 'LeftMobileMenuNavbar'
RightMobileMenuNavbar.displayName = 'RightMobileMenuNavbar'

export { FloatingNavbar, LeftMobileMenuNavbar, NavbarHeader, NavbarLink, NavbarMenu, NavbarMenus, StaticNavbar }
