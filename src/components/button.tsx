import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
    base: "px-5 rounded-lg py-2 font-medium flex items-center gap-2 justify-center",

    variants: {
        variant: {
            primary: "bg-purple-300 text-purple-950 hover:bg-purple-400",
            secondary: "bg-zinc-800 text-purple-300 hover:bg-purple-300 hover:text-purple-950"
        },
        size: {
            default: "py-2",
            full: "w-full h-11"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode,
}

export function Button({children, variant, size, ...props}: ButtonProps) {
    return(
        <button 
            {...props}
            className={buttonVariants({variant, size})}
        >
            {children}
        </button>
    );
}