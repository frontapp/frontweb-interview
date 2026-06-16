import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './index';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonType = 'filled' | 'outlined';

// Base props without variant-specific constraints
export type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'color'> & {
  buttonText: string;
};

// Discriminated union: tertiary variant doesn't allow buttonType or color
export type ButtonPropsWithVariants =
  | (BaseButtonProps & {
      variant: 'tertiary';
      buttonType?: never;
    })
  | (BaseButtonProps &
      VariantProps<typeof buttonVariants> & {
        variant?: 'primary' | 'secondary';
        buttonType?: ButtonType;
      });

export type ButtonFunctionalityProps = {
  action: 'demo' | 'trial' | 'url';
  href?: string;
  target?: '_self' | '_blank';
};

export type ButtonProps = ButtonPropsWithVariants & ButtonFunctionalityProps;
