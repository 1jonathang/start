import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import{ Loader2 } from "lucide-react";

export const buttonVariants = cva('inline-flex items-center justify-center rounded-md font-medium transition-color focus:outline-none disabled:opacity-50 disabled:pointer-events-none',  {
    variants: {
        variant: {
            default: 'bg-slate-100 text-slate-200  hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-300',
            outline: 'px-6 py-5 bg-white border border-slate-200 text-zinc-400 hover:text-slate-900 dark:hover:text-slate-900 dark:text-slate-400  transition hover:border-violet-300 dark:bg-slate-700 dark:hover:bg-slate-500 border-2 rounded-xl dark:border-none',
            ghost: 'bg-transparent text-slate-400 hover:text-slate-800 dark:hover:text-slate-600 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            link: 'bg-transparent dark:bg-transparent hover:bg-slate-200 text-slate-800 dark:text-slate-400 dark:hover:bg-slate-600',
            signin: 'bg-transparent text-[#EBCAFF] transition hover:text-violet-400 dark:hover:text-slate-600 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent'
        },
        size: {
            default: 'h-10 py-2 px-4 text-md',
            sm: 'h-9 px-2 rounded-md text-sm',
            lg: 'h-11 px-8 rounded-md'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, 
    VariantProps<typeof buttonVariants> {
        isLoading?: boolean
    }
    
const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps> (
    ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
            <button 
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            disabled={isLoading}
            {...props}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null} 
                {children}
            </button>
        )
    }
);


Button.displayName = "Button";

export default Button;