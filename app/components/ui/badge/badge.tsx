import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border  text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground border-transperant hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground border-transperant hover:bg-secondary/90',
        outline: 'text-foreground ',
        desctructive:
          'bg-destructive text-destructive-foreground border-transperant hover:bg-destructive/90',
      },
      size: {
        default: 'px-2.5 py-1',
        sm: 'px-2 py-0.5',
        lg: 'px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants, type BadgeProps };
