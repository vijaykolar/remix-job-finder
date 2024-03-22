import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/lib/utils";

const textVariants = cva(
  "text-gray-600 leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        xs: "text-xs ",
        sm: "text-sm l",
        base: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  className?: string;
  as?: "p" | "span" | "div" | "strong" | "em" | "b" | "i" | "mark" | "u";
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as = "p", size, ...props }, ref) => {
    const Compo = as;
    return (
      <Compo
        ref={ref}
        className={cn(textVariants({ className, size }))}
        {...props}
      />
    );
  }
);

export { Text, textVariants };
