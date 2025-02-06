import React, { forwardRef, HTMLProps } from 'react';
import { cn } from '@/lib/utils'; // Import the cn function

interface AlertProps extends HTMLProps<HTMLDivElement> {
    type?: 'default' | 'success' | 'danger' | 'warning';
}
// Alert component
const Alert = forwardRef<HTMLDivElement, AlertProps>(({ children, className = "", type = 'default', ...props }, ref) => {
    return (
        <div ref={ref} className={cn("relative p-3 mb-4 rounded-lg", getAlertStyles(type), className)} role="alert" {...props}>
            {children}
        </div>
    );
});

// AlertIcon component
const AlertIcon = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={cn("absolute w-[2.5rem] text-3xl h-[2.5rem] flex justify-center items-center", className)} {...props}>
      {children}
    </div>
  );
});

// AlertTitle component
const AlertTitle = forwardRef<HTMLHeadingElement, HTMLProps<HTMLHeadingElement>>(({ children, className = "", ...props }, ref) => {
  return (
    <h3 ref={ref} className={cn("ml-12 font-semibold", className)} {...props}>
      {children}
    </h3>
  );
});

// AlertDescription component
const AlertDescription = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={cn("ml-12", className)} {...props}>
      {children}
    </div>
  );
});

// Utility function to get styles based on alert type
const getAlertStyles = (type: 'default' | 'success' | 'danger' | 'warning') => {
  switch (type) {
    case 'success':
      return 'bg-green-100 text-green-700';
    case 'danger':
      return 'bg-red-100 text-red-700';
    case 'warning':
      return 'bg-yellow-100 text-yellow-700';
    default:
      return 'bg-background text-foreground';
  }
};

Alert.displayName = 'Alert'
AlertIcon.displayName = 'AlertIcon'
AlertTitle.displayName = 'AlertTitle'
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertIcon, AlertTitle, AlertDescription, getAlertStyles };