import { FC } from "react";
import { ICON_VARIANTS } from "./Icon.registry";
import { IconProps } from "./Icon.types";

/**
 * 
 * The Icon component is a wrapper around all the Icon Variants sourced from the Global UI Kit (https://www.figma.com/design/cL1cMol2CdJirlTQIo1kVc/%F0%9F%9F%A3-Global-UI-Kit?node-id=2731-112488)
 * 
 * Variants are selected by names, which are the same as they appear in the Global UI Kit. 
 * 
 * Every Icon comes in 3 sizes (12, 16, 20) and two types (filled, outlined).
 * Note that or some icons, the outlined and filled variants are the same - the Gallery view shows outlined/filled versions side-by-side. 
 * 
 * For theming purposes, the underlying SVGs all have fill/stroke color set to "currentColor". 
 * This means that the Icon component can be colored by the same classes as typography, e.g. text-primary, button-text-default, etc.
 */
const Icon: FC<IconProps> = ({
  name,
  size = 16,
  type = "outlined",
  className,
  "aria-hidden": ariaHidden = true,
}) => {
  console.log('name', name);

  const variantsByType = ICON_VARIANTS[name];
  
  console.log('variantsByType', variantsByType);
  
  const Variant = variantsByType[type][size];

  if (!Variant) return null;
  console.log('icon name', name);
  // We return the SVG node directly.
  return (
    <Variant
      className={className}
      aria-hidden={ariaHidden}
      focusable="false"
    />
  );
};

export default Icon;
