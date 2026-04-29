import React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", ...props }, ref) => {

        const variantStyles = {
            default: "bg-[#C9A96A] text-white hover:bg-[#B5966B] shadow-md px-[28px] py-[14px]",
            outline: "border border-[#C9A96A] text-[#C9A96A] bg-transparent hover:bg-[#C9A96A]/5 px-[28px] py-[14px]",
            ghost: "text-slate-900 hover:bg-slate-100",
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-base font-medium transition-all duration-250 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96A] disabled:pointer-events-none disabled:opacity-50",
                    variantStyles[variant],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
