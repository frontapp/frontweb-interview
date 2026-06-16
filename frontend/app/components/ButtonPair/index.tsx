import cn from 'classnames';
import { Button } from '../Button';
import type { ButtonFunctionalityProps, ButtonType, ButtonVariant, BaseButtonProps } from '../Button/Button.types';

export type ButtonPairVariant = 'filledOutline' | 'filledTertiary';

// The buttons 'variant' and 'buttonType' props are derived from the ButtonPairVariant
const buttonVariantMapping = {
  filledOutline: {
    firstButtonTypeProps: {
      variant: 'primary',
      buttonType: 'filled',
    },
    secondButtonTypeProps: {
      variant: 'primary',
      buttonType: 'outlined',
    },
  },
  filledTertiary: {
    firstButtonTypeProps: {
      variant: 'primary',
      buttonType: 'filled',
    },
    secondButtonTypeProps: {
      variant: 'tertiary',
    },
  },
} as const satisfies Record<ButtonPairVariant, {
  firstButtonTypeProps: {
    variant: ButtonVariant;
    buttonType: ButtonType;
  };
  secondButtonTypeProps: {
    variant: ButtonVariant;
    buttonType?: ButtonType;
  };
}>;

type ButtonPairBaseProps = {
  variant?: ButtonPairVariant;
  className?: string;
  hasSecondButton?: boolean;
  firstButtonFunctionalityProps: ButtonFunctionalityProps & BaseButtonProps;
  secondButtonFunctionalityProps?: ButtonFunctionalityProps & BaseButtonProps;
};

export type ButtonPairProps = ButtonPairBaseProps;

/**
 * Purpose of ButtonPair is to enforce how types/variants of buttons are paired:
 * - First button: Always primary filled
 * - Second button (optional): primary outlined (filledOutline) or tertiary (filledTertiary)
 * 
 * @param variant - The variant of the button pair - determines the visual props of the two buttons
 * @param className - The class name of the button pair
 * @param hasSecondButton - Whether to show the second button
 * @param firstButtonFunctionalityProps - The functionality props of the first button - buttonText, action, and optional url
 * @param secondButtonFunctionalityProps - The functionality props of the second button - buttonText, action, and optional url
 * @returns The button pair
 * @example
 * <ButtonPair
 *   variant="filledOutline"
 *   hasSecondButton={true}
 *   firstButtonFunctionalityProps={{ buttonText: 'First Button', action: 'demo' }}
 *   secondButtonFunctionalityProps={{ buttonText: 'Second Button', action: 'url', href: '#' }}
 * />
 */
const ButtonPair = ({
  variant,
  className,
  hasSecondButton,
  firstButtonFunctionalityProps,
  secondButtonFunctionalityProps
}: ButtonPairProps) => {

  const firstButtonTypeProps = buttonVariantMapping[variant ?? 'filledOutline'].firstButtonTypeProps;
  const secondButtonTypeProps = buttonVariantMapping[variant ?? 'filledOutline'].secondButtonTypeProps;

  return (
    <div className={cn('flex space-x-2xs', className)}>
      <Button
        {...firstButtonTypeProps}
        {...firstButtonFunctionalityProps}
      />
      {hasSecondButton && secondButtonFunctionalityProps && (
        <Button
          {...secondButtonTypeProps}
          {...secondButtonFunctionalityProps}
        />
      )}
    </div >
  );
};

export { ButtonPair };
