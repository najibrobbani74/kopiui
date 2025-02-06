"use client" // Directive to indicate that this file is a client-side component if using NextJs.

import { createContext, forwardRef, HTMLProps, useContext, useState, ReactNode, FC } from 'react';
import { cn } from '@/lib/utils';

// Context to manage dialog open/close state
const AlertDialogContext = createContext<{
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
} | null>(null);

// Provider component to manage dialog state
const AlertDialogProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AlertDialogContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </AlertDialogContext.Provider>
    );
};

// Main AlertDialog component with state management
const AlertDialog = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, ...props }, ref) => {
    return (
        <AlertDialogProvider>
            <div ref={ref} {...props}>
                {children}
            </div>
        </AlertDialogProvider>
    );
});

// Trigger button to open the dialog
const AlertDialogTrigger = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, onClick, className = "", ...props }, ref) => {
    const context = useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogTrigger must be used within AlertDialog');
    
    return (
        <div
            ref={ref}
            className={cn("px-4 py-2 rounded", className)}
            onClick={(e) => {
                context.setIsOpen(true);
                onClick?.(e);
            }}
            {...props}
        >
            {children}
        </div>
    );
});

// Content wrapper for the dialog
const AlertDialogContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
    const context = useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogContent must be used within AlertDialog');
    
    if (!context.isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" />
            <div
                ref={ref}
                className={cn("relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4", className)}
                {...props}
            >
                {children}
            </div>
        </div>
    );
});

// Header section of the dialog
const AlertDialogHeader = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props}>
        {children}
    </div>
));

// Title component
const AlertDialogTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(({ children, className = "", ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props}>
        {children}
    </h2>
));

// Description component
const AlertDialogDescription = forwardRef<HTMLParagraphElement, HTMLProps<HTMLParagraphElement>>(({ children, className = "", ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-600", className)} {...props}>
        {children}
    </p>
));

// Footer section of the dialog
const AlertDialogFooter = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => (
    <div ref={ref} className={cn("mt-6 flex justify-end space-x-2", className)} {...props}>
        {children}
    </div>
));

// Cancel button
const AlertDialogCancel = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, onClick, className = "", ...props }, ref) => {
    const context = useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogCancel must be used within AlertDialog');
    
    return (
        <div
            ref={ref}
            className={cn("px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200", className)}
            onClick={(e) => {
                context.setIsOpen(false);
                onClick?.(e);
            }}
            {...props}
        >
            {children}
        </div>
    );
});

// Action button
const AlertDialogAction = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, onClick, className = "", ...props }, ref) => {
    const context = useContext(AlertDialogContext);
    if (!context) throw new Error('AlertDialogAction must be used within AlertDialog');
    
    return (
        <div
            ref={ref}
            className={cn("px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700", className)}
            onClick={(e) => {
                context.setIsOpen(false);
                onClick?.(e);
            }}
            {...props}
        >
            {children}
        </div>
    );
});

AlertDialog.displayName = 'AlertDialog'
AlertDialogTrigger.displayName = 'AlertDialogTrigger'
AlertDialogContent.displayName = 'AlertDialogContent'
AlertDialogHeader.displayName = 'AlertDialogHeader'
AlertDialogTitle.displayName = 'AlertDialogTitle'
AlertDialogDescription.displayName = 'AlertDialogDescription'
AlertDialogFooter.displayName = 'AlertDialogFooter'
AlertDialogCancel.displayName = 'AlertDialogCancel'
AlertDialogAction.displayName = 'AlertDialogAction'

export {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogAction,
    AlertDialogCancel,
};