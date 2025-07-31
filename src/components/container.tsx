import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({ children, className }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("w-full max-w-4xl mx-auto bg-white dark:bg-black", className)}>{children}</div>;
};
