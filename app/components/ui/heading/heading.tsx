import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const headingVariants = cva(
  'text-gray-900 leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
      },
      weight: {
        bold: 'font-bold',
        normal: 'font-normal',
        semibold: 'font-semibold',
        medium: 'font-medium',
      },
    },
    defaultVariants: {
      size: 'lg',
      weight: 'normal',
    },
  }
);

interface HeadingTypes
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingTypes>(
  ({ className, as = 'h1', weight, size, ...props }, ref) => {
    const Compo = as;
    return (
      <Compo
        ref={ref}
        className={cn(headingVariants({ className, size, weight }))}
        {...props}
      />
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
