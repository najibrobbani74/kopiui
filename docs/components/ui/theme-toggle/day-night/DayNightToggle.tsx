"use client"

import { cn } from "@/lib/utils";
import { forwardRef, HTMLProps, useEffect, useMemo, useState } from 'react';
type DayNightToggleProps = HTMLProps<HTMLLabelElement> & {
    defaultTheme?: 'light' | 'dark'
}
const DayNightToggle = forwardRef<HTMLLabelElement, DayNightToggleProps>(({ className = "", defaultTheme = "light", ...props }, ref) => {
    const [theme, setTheme] = useState(defaultTheme);
    useEffect(() => {
        document.documentElement.classList.add(theme == "dark" ? "dark" : "light");
        document.documentElement.classList.remove(theme == "dark" ? "light" : "dark");
    }, [theme]);
    return (
        <label onClick={() => setTheme(theme == "light" ? "dark" : "light")} className={cn('flex cursor-pointer relative justify-center items-center w-10 h-10', className)} ref={ref} {...props}>
            <svg className={cn('fill-foreground absolute duration-500 transition-opacity', (theme == "dark" ? "opacity-0" : "opacity-100"))} height="50" viewBox="0 0 512 512" width="50" >
                <path d="M248.082,263.932c-31.52-31.542-39.979-77.104-26.02-116.542c-15.25,5.395-29.668,13.833-41.854,26.02  c-43.751,43.75-43.751,114.667,0,158.395c43.729,43.73,114.625,43.752,158.374,0c12.229-12.186,20.646-26.604,26.021-41.854  C325.188,303.91,279.604,295.451,248.082,263.932z" />
            </svg>
            <svg className={cn('fill-foreground absolute duration-500 transition-opacity', (theme == "light" ? "opacity-0" : "opacity-100"))} width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256" />
                <circle cx="128" cy="128" r="68" />
                <path d="M128,44a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V36A8,8,0,0,0,128,44Z" />
                <path d="M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3L54.5,43.1A8.1,8.1,0,1,0,43.1,54.5Z" />
                <path d="M44,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H36A8,8,0,0,0,44,128Z" />
                <path d="M57.3,187.4,43.1,201.5a8.1,8.1,0,0,0,0,11.4,8.5,8.5,0,0,0,5.7,2.3,8.3,8.3,0,0,0,5.7-2.3l14.1-14.2a8,8,0,0,0-11.3-11.3Z" />
                <path d="M128,212a8,8,0,0,0-8,8v20a8,8,0,0,0,16,0V220A8,8,0,0,0,128,212Z" />
                <path d="M198.7,187.4a8,8,0,0,0-11.3,11.3l14.1,14.2a8.3,8.3,0,0,0,5.7,2.3,8.5,8.5,0,0,0,5.7-2.3,8.1,8.1,0,0,0,0-11.4Z" />
                <path d="M240,120H220a8,8,0,0,0,0,16h20a8,8,0,0,0,0-16Z" />
                <path d="M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l14.2-14.1a8.1,8.1,0,0,0-11.4-11.4L187.4,57.3a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z" />
            </svg>
        </label>
    )
})

DayNightToggle.displayName = 'DayNightToggle'


export default DayNightToggle