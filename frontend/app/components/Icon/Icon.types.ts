import type { ComponentType } from 'react';
import { IconName } from './Icon.registry';

export const ICON_SIZES = [12, 16, 20] as const;
export type IconSize = (typeof ICON_SIZES)[number];

export const ICON_TYPES = ['filled', 'outlined'] as const;
export type IconType = (typeof ICON_TYPES)[number];

export type IconElementProps = {
  'size'?: IconSize;
  'type'?: IconType;
  'className'?: string;
  /**
   * Decorative by default. Consumers should set aria-label on the parent
   * (e.g. icon-only button) rather than relying on SVG titles.
   */
  'aria-hidden'?: boolean;
};

export type IconProps = IconElementProps & {
  name: IconName;
};

/**
 * Variant map is intentionally strict for included icons:
 * each included icon is expected to have all sizes (12/16/20) for supported types.
 */
export type IconVariantMap<C extends ComponentType> = {
  [K in IconType]: Record<IconSize, C>;
};

export function createIconVariantMap<C extends ComponentType>(map: IconVariantMap<C>): IconVariantMap<C> {
  return map;
}
