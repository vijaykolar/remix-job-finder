import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const textFieldVariants = cva(
  "p-2.5 focus-visible:outline-none focus:border-primary rounded-md border flex w-full flex-col space-y-1.5 text-sm leading-none",
  {
    variants: {
      variant: {
        default: "border text-foreground text-sm border-transperant ",
        secondary:
          "bg-secondary text-secondary-foreground border-transperant hover:bg-secondary/90",
        outline: "text-foreground border",
        desctructive:
          "bg-destructive text-destructive-foreground border-transperant hover:bg-destructive/90",
      },
      size: {
        default: "p-2",
        sm: "p-1.5",
        lg: "p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface TextFieldProps
  extends React.HTMLAttributes<typeof HTMLInputElement>,
    VariantProps<typeof textFieldVariants> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  size?: "default" | "sm" | "lg";
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ variant, className, iconLeft, size, iconRight, ...props }, ref) => {
    return (
      <div className="relative">
        {iconLeft && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            {iconLeft}
          </div>
        )}
        <input
          ref={ref}
          type="text"
          className={cn(textFieldVariants({ variant, size, className }))}
          {...props}
        />
        {/* <input
          className={cn(
            "p-2.5 focus-visible:outline-none focus:border-primary rounded-md border flex w-full flex-col space-y-1.5 text-sm leading-none",
            className,
            size
          )}
          ref={ref}
          {...props}
        /> */}
        {iconRight && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {iconRight}
          </div>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";

export { TextField };
