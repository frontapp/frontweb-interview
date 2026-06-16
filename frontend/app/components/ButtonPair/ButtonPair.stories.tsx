import { THEME_NAMES, ThemeNameType } from '@/tailwind-config/theme.constants';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ButtonFunctionalityProps } from '../Button/Button.types';
import ThemeWrapper from '../ThemeWrapper';
import { ButtonPair, ButtonPairProps } from './index';

type StoryArgs = ButtonPairProps & {
  theme?: ThemeNameType;
  firstButtonText?: string;
  secondButtonText?: string;
  firstButtonAction?: ButtonFunctionalityProps['action'];
  secondButtonAction?: ButtonFunctionalityProps['action'];
  firstButtonHref?: string;
  firstButtonTarget?: ButtonFunctionalityProps['target'];
  secondButtonHref?: string;
  secondButtonTarget?: ButtonFunctionalityProps['target'];
};

const meta: Meta<StoryArgs> = {
  title: 'Atoms/ButtonPair',
  component: ButtonPair,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Specifies the visual style of the two buttons',
      control: 'select',
      options: ['filledOutline', 'filledTertiary'],
    },
    theme: {
      name: 'Theme',
      control: 'select',
      options: THEME_NAMES,
      description: 'Color theme - this normally comes from the parent component, shown here for demonstration purposes',
      table: {
        category: 'Theme',
      },
    },
    firstButtonText: {
      name: 'First Button Text',
      control: 'text',
      description: 'Text for the first button',
    },
    firstButtonAction: {
      name: 'First Button Action',
      control: 'select',
      description: 'Action for the first button',
      options: ['demo', 'trial', 'url'],
    },
    firstButtonHref: {
      name: 'First Button Href',
      control: 'text',
      description: 'Href for the first button, only applicable if the first button action is "url"',
      if: { arg: 'firstButtonAction', eq: 'url' },
    },
    firstButtonTarget: {
      name: 'First Button Target',
      control: 'select',
      options: ['_self', '_blank'],
      if: { arg: 'firstButtonAction', eq: 'url' },
    },
    hasSecondButton: {
      name: 'Has Second Button',
      control: 'boolean',
      description: 'Whether to show the second button',
    },
    secondButtonText: {
      name: 'Second Button Text',
      control: 'text',
      description: 'Text for the second button',
      if: { arg: 'hasSecondButton', eq: true },
    },
    secondButtonAction: {
      name: 'Second Button Action',
      control: 'select',
      options: ['demo', 'trial', 'url'],
      if: { arg: 'hasSecondButton', eq: true },
    },
    secondButtonHref: {
      name: 'Second Button Href',
      control: 'text',
      description: 'Href for the second button, only applicable if the second button action is "url"',
      if: { arg: 'secondButtonAction', eq: 'url' },
    },
    secondButtonTarget: {
      name: 'Second Button Target',
      control: 'select',
      options: ['_self', '_blank'],
      if: { arg: 'secondButtonAction', eq: 'url' },
    },
    // Programatic props not helpful in storybook UI 
    className: {
      table: {
        disable: true,
      },
    },
    firstButtonFunctionalityProps: {
      table: {
        disable: true,
      },
    },
    secondButtonFunctionalityProps: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: StoryArgs) => {
    const {
      theme,
      variant,
      firstButtonText = 'First',
      secondButtonText = 'Second',
      firstButtonAction = 'demo',
      secondButtonAction = 'demo',
      hasSecondButton = true,
      firstButtonHref,
      secondButtonHref,
      firstButtonTarget,
      secondButtonTarget,
    } = args;

    const getFirstButtonProps = (): ButtonFunctionalityProps & { buttonText: string } => {
      if (firstButtonAction === 'url') {
        return {
          action: 'url',
          href: firstButtonHref || '#',
          buttonText: firstButtonText,
          target: firstButtonTarget || '_self',
        };
      }
      return {
        action: firstButtonAction,
        buttonText: firstButtonText,
        ...(firstButtonHref ? { href: firstButtonHref } : {}),
      };
    };

    const getSecondButtonProps = (): (ButtonFunctionalityProps & { buttonText: string }) | undefined => {
      if (!secondButtonText) return undefined;
      if (secondButtonAction === 'url') {
        return {
          action: 'url',
          href: secondButtonHref || '#',
          buttonText: secondButtonText,
          target: secondButtonTarget || '_self',
        };
      }
      return {
        action: secondButtonAction,
        buttonText: secondButtonText,
        ...(secondButtonHref ? { href: secondButtonHref } : {}),
      };
    };

    const content = (
      <ButtonPair
        variant={variant}
        hasSecondButton={hasSecondButton}
        firstButtonFunctionalityProps={getFirstButtonProps()}
        secondButtonFunctionalityProps={getSecondButtonProps()}
      />
    );

    return (
      <ThemeWrapper theme={theme || 'theme-white'}>
        <div className="surface-l0 flex justify-center px-md py-4xl">
          {content}
        </div>
      </ThemeWrapper>
    );
  },
};

export default meta;

export const filledOutline: StoryObj<StoryArgs> = {
  args: {
    variant: 'filledOutline',
    hasSecondButton: true,
    firstButtonText: 'Primary',
    secondButtonText: 'Secondary',
  },
};

export const filledTertiary: StoryObj<StoryArgs> = {
  args: {
    variant: 'filledTertiary',
    hasSecondButton: true,
    firstButtonText: 'Primary',
    secondButtonText: 'Tertiary',
  },
};
