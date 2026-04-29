import React from 'react';
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div className={cn("mx-auto max-w-[1280px] px-6", className)} {...props}>
            {children}
        </div>
    );
}
