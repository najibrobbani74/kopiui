"use client"

import { cn } from "@/lib/utils"
import { forwardRef, HTMLAttributes, HTMLProps, useEffect, useMemo, useRef, useState } from "react"

interface SearchModalProps extends HTMLAttributes<HTMLDivElement> {
    triggerKey: string,
    data: DataType[],
}
interface DataType {
    title: string,
    link: string
}
const SearchModal = forwardRef<HTMLDivElement, SearchModalProps>(({ children, triggerKey, data, className = '' }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    const [searchKey, setSearchKey] = useState('')
    const searchInput = useRef<HTMLInputElement>(null)
    const filteredData = useMemo(() => {
        return data.filter(item => {
            for (const key of Object.keys(item) as (keyof DataType)[]) {
                if (item[key].toString().toLowerCase().includes(searchKey.toLowerCase())) {
                    return true
                }
            }
        })
    }, [searchKey, data])
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            event.stopPropagation()
            if (event.key === 'Escape') {
                closeModal();
            } else if (event.ctrlKey && event.key === 'k') {
                openModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown,true);
        if (isOpen && searchInput.current) {
            searchInput.current.focus()
        }
    }, [isOpen])
    const closeModal = () => {
        setIsOpen(false)
    };
    const openModal = () => {
        setSearchKey('')
        setIsOpen(true)       
    }
    return (
        <div ref={ref} onClick={closeModal}
            style={{ display: isOpen ? 'flex' : 'none' }}
            className={cn("fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center", className)}>
            <input type="checkbox" hidden id={triggerKey} onChange={openModal} />
            <div onClick={e => e.stopPropagation()} className="bg-background flex flex-col  w-[40rem] max-md:w-full rounded-lg">
                <div className="flex flex-row p-4 items-center justify-center">
                    <svg className="fill-foreground mr-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                        <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                    </svg>
                    <input ref={searchInput} type="text" value={searchKey} onInput={(e) => setSearchKey(e.currentTarget.value)} placeholder="Search" className="outline-none border-none  bg-transparent w-full" />
                    <svg onClick={() => setSearchKey("")} className="fill-foreground ml-5 cursor-pointer hover:fill-primary" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                        <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
                    </svg>
                </div>
                <div className="flex-col max-h-[500px] overflow-y-scroll last:rounded-b-lg">
                    {filteredData.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row p-4 items-center hover:bg-primary hover:text-primary-foreground">
                                <a href={item.link}>{item.title}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
})

SearchModal.displayName = 'SearchModal'

interface SearchModalTriggerProps extends HTMLProps<HTMLLabelElement> {
    triggerKey: string
}
const SearchModalTrigger = forwardRef<HTMLLabelElement, SearchModalTriggerProps>(({ children, triggerKey, className = '', ...props }, ref) => {
    return (
        <label ref={ref} className={cn("px-3 py-1 transition-opacity flex items-center rounded-lg opacity-50 hover:opacity-100 cursor-pointer border", className)} htmlFor={triggerKey} {...props}>
            <svg className="fill-foreground mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg>
            <span className="w-56">Search</span>
            <div className="border px-2 py-1 text-sm rounded-lg">ctrl + k</div>
        </label>
    )
})

SearchModalTrigger.displayName = 'SearchModalTrigger'

export { SearchModal, SearchModalTrigger }
