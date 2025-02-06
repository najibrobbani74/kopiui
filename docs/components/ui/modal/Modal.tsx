"use client"
import { forwardRef, HTMLProps, useState } from "react"
import { cn } from "@/lib/utils"

interface ModalProps extends HTMLProps<HTMLDivElement> {
    triggerKey: string
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(({ children, triggerKey, className = '' }, ref) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div ref={ref} onClick={() => setIsOpen(false)}
        style={{display: isOpen ? 'flex' : 'none'}}
         className={cn("fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center", className)}>
            <input type="checkbox" hidden id={triggerKey} onChange={() => setIsOpen(!isOpen)} />
            {children}
        </div>
    )
})
Modal.displayName = "Modal"

interface ModalTriggerProps extends HTMLProps<HTMLLabelElement> {
    triggerKey: string
}
const ModalTrigger = forwardRef<HTMLLabelElement, ModalTriggerProps>(({ children, triggerKey, className = '', ...props }, ref) => {
    return (
        <label ref={ref} className={cn("text-foreground", className)} htmlFor={triggerKey} {...props}>
            {children}
        </label>
    )
})
ModalTrigger.displayName = "ModalTrigger"

export { Modal, ModalTrigger }