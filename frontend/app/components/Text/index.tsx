import { cva, type VariantProps } from 'class-variance-authority';
import cn from 'classnames';
import { createElement, forwardRef } from 'react';

export type TextType = 'display1' | 'display2' | 'display3' | 'h1' | 'h2' | 'h3' | 'h4' | 'p1' | 'p1-medium' | 'p2' | 'p2-medium' | 'caption1' | 'caption2' | 'micro1' | 'micro2';

export const TEXT_VARIANTS = {
  // Display variants
  'display1': 'font-sans font-weight-medium font-size-d1 font-line-height-d1 font-letter-spacing-d1',
  'display2': 'font-sans font-weight-medium font-size-d2 font-line-height-d2 font-letter-spacing-d2',
  'display3': 'font-sans font-weight-medium font-size-d3 font-line-height-d3 font-letter-spacing-d3',

  // Heading variants
  'h1': 'font-sans font-weight-medium font-size-h1 font-line-height-h1 font-letter-spacing-h1',
  'h2': 'font-sans font-weight-medium font-size-h2 font-line-height-h2 font-letter-spacing-h2',
  'h3': 'font-sans font-weight-medium font-size-h3 font-line-height-h3 font-letter-spacing-h3',
  'h4': 'font-sans font-weight-medium font-size-h4 font-line-height-h4 font-letter-spacing-h4',

  // Paragraph variants
  'p1': 'font-sans font-weight-regular font-size-p1 font-line-height-p1 font-letter-spacing-p1',
  'p1-medium': 'font-sans font-weight-medium font-size-p1 font-line-height-p1 font-letter-spacing-p1',
  'p2': 'font-sans font-weight-regular font-size-p2 font-line-height-p2 font-letter-spacing-p2',
  'p2-medium': 'font-sans font-weight-medium font-size-p2 font-line-height-p2 font-letter-spacing-p2',

  // Caption variants
  'caption1': 'font-sans font-weight-regular font-size-c1 font-line-height-c1 font-letter-spacing-c1',
  'caption2': 'font-sans font-weight-regular font-size-c2 font-line-height-c2 font-letter-spacing-c2',

  // Micro variants
  'micro1': 'font-sans font-weight-regular font-size-m1 font-line-height-m1 font-letter-spacing-m1 uppercase',
  'micro2': 'font-sans font-weight-bold font-size-m2 font-line-height-m2 font-letter-spacing-m2 uppercase',
} as const satisfies Record<TextType, string>;

const textVariants = cva(
  '', // No base classes
  {
    variants: {
      type: TEXT_VARIANTS,
    },
    defaultVariants: {
      type: 'p1',
    },
  }
);

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
  VariantProps<typeof textVariants> {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'div' | 'span';
  children?: React.ReactNode;
}

const Text = forwardRef<HTMLElement, TextProps>(
  ({ className, type, as = 'p', children, ...props }, ref) => {
    return createElement(
      as,
      {
        className: cn(textVariants({ type }), className),
        ref,
        ...props,
      },
      children
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
