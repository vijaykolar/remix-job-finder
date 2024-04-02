import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/lib/utils';

const textVariants = cva('text-gray-600 leading-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
    },
    weigth: {
      bold: 'font-bold',
      normal: 'font-normal',
      semibold: 'font-semibold',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    size: 'sm',
    weigth: 'normal',
  },
});

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  className?: string;
  as?: 'p' | 'span' | 'div' | 'strong' | 'em' | 'i' | 'mark' | 'u';
  // weigth?: 'bold' | 'normal' | 'semibold' | 'medium';
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(({ className, weigth, as = 'p', size, ...props }, ref) => {
  const Compo = as;
  return <Compo ref={ref} className={cn(textVariants({ className, size, weigth }))} {...props} />;
});

Text.displayName = 'Text';

export { Text, textVariants };
