import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '~/lib/utils';

interface CardTypes extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardTypes>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn('rounded-md bg-background shadow-sm border', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardTypes>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-4', className)}
        {...props}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

const cardTitleVariants = cva(
  'text-gray-800 font-medium leading-none tracking-tight',
  {
    variants: {
      size: {
        default: 'text-base',
        sm: 'text-sm',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
      },
      color: {
        default: 'text-gray-800',
        primary: 'text-primary',
      },
    },
    defaultVariants: {
      size: 'default',
      color: 'default',
    },
  }
);

interface CardTitleTypes
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  claName?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'default' | 'primary';
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleTypes>(
  ({ className, children, size, color, as = 'h3', ...props }, ref) => {
    const Comp = as;
    return (
      <Comp
        ref={ref}
        className={cn(cardTitleVariants({ size, color, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

CardTitle.displayName = 'CardTitle';

interface CardDescriptionTypes
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  CardDescriptionTypes
>(({ className, children }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm leading-normal text-gray-600', className)}
    >
      {children}
    </p>
  );
});

CardDescription.displayName = 'CardDescription';

interface CardContentTypes extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentTypes>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('p-4 pt-0', className)} {...props} />;
  }
);

CardContent.displayName = 'CardContent';

interface CardFooterTypes extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterTypes>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-4 pt-0', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
