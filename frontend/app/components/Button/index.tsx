'use client';

// import { useModalButtonActions } from '@/hooks/useModalButtonActions';
import { cva } from 'class-variance-authority';
import cn from 'classnames';
import Link from 'next/link';
import { forwardRef } from 'react';
import { ButtonProps, ButtonPropsWithVariants } from './Button.types';
import { TertiaryButton } from './TertiaryButton';

export const ButtonBaseClasses = 'transition-colors duration-400 ease-appear rounded-[64px] text-white font-sans font-weight-medium font-size-p2 font-line-height-p2 font-letter-spacing-p2 focus-visible:button-focus';

const buttonVariants = cva(
  ButtonBaseClasses,
  {
    variants: {
      variant: {
        primary: 'py-xs px-s',
        secondary: 'py-2xs px-xs',
        tertiary: 'py-xs px-s flex items-center justify-center button-text-inverted space-x-xs'
      },
      buttonType: {
        filled: '',
        outlined: 'bg-transparent ',
      },
    },
    compoundVariants: [
      // Filled
      {
        variant: ['primary', 'secondary'],
        buttonType: 'filled',
        class: 'button-surface button-text-default hover:button-surface-active',
      },
      // Outlined
      {
        variant: ['primary', 'secondary'],
        buttonType: 'outlined',
        class: 'button-border button-text-inverted hover:button-border-hover hover:button-surface-outline-hover active:button-surface-outline-active active:button-text-outline-active',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      buttonType: 'filled',
    },
  }
);

const ButtonElement = forwardRef<HTMLButtonElement, ButtonPropsWithVariants>(
  ({ className, variant, buttonType, buttonText, ...props }, ref) => {
    return (
      variant === 'tertiary' ? (
        // For tertiary variant, ignore buttonType
        <TertiaryButton
          className={cn(buttonVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          {buttonText}
        </TertiaryButton>
      ) : (
        <button
          className={cn(buttonVariants({ variant, buttonType }), className)}
          ref={ref}
          {...props}
        >
          {buttonText}
        </button>
      )
    );
  }
);

ButtonElement.displayName = 'ButtonElement';


const Button = ({ action, href, target, buttonText, ...props }: ButtonProps) => {
  // const { modalActionHandler } = useModalButtonActions();
  const modalActionHandler = (action: string) => {
    return modalActionHandler(action);
  };

  if (action === 'url' && href) {
    return (
      <Link href={href} target={target || '_self'}>
        <ButtonElement {...props} buttonText={buttonText} />
      </Link>
    );
  }
  if (action === 'trial') {
    return (
      <ButtonElement {...props} onClick={() => modalActionHandler('trial')} buttonText={buttonText} />
    );
  }
  if (action === 'demo') {
    return (
      <ButtonElement {...props} onClick={() => modalActionHandler('demo')} buttonText={buttonText} />
    );
  }
  return <ButtonElement {...props} buttonText={buttonText} />;
};

export { Button, buttonVariants };
