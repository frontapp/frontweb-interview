import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 2.5C4.72386 2.5 4.5 2.72386 4.5 3C4.5 3.27614 4.72386 3.5 5 3.5H7.79289L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L8.5 4.20711V7C8.5 7.27614 8.72386 7.5 9 7.5C9.27614 7.5 9.5 7.27614 9.5 7V3C9.5 2.72386 9.27614 2.5 9 2.5H5Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.66671 3.33301C6.29852 3.33301 6.00004 3.63148 6.00004 3.99967C6.00004 4.36786 6.29852 4.66634 6.66671 4.66634H10.3906L3.52864 11.5283C3.26829 11.7886 3.26829 12.2107 3.52864 12.4711C3.78899 12.7314 4.2111 12.7314 4.47145 12.4711L11.3334 5.60915V9.33301C11.3334 9.7012 11.6319 9.99967 12 9.99967C12.3682 9.99967 12.6667 9.7012 12.6667 9.33301V3.99967C12.6667 3.63148 12.3682 3.33301 12 3.33301H6.66671Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33329 4.16699C7.87306 4.16699 7.49996 4.54009 7.49996 5.00033C7.49996 5.46056 7.87306 5.83366 8.33329 5.83366H12.9881L4.4107 14.4111C4.08527 14.7365 4.08527 15.2641 4.4107 15.5896C4.73614 15.915 5.26378 15.915 5.58922 15.5896L14.1666 7.01217V11.667C14.1666 12.1272 14.5397 12.5003 15 12.5003C15.4602 12.5003 15.8333 12.1272 15.8333 11.667V5.00033C15.8333 4.54009 15.4602 4.16699 15 4.16699H8.33329Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.49996 7C9.49996 7.27614 9.2761 7.5 8.99996 7.5C8.72382 7.5 8.49996 7.27614 8.49996 7V4.20703L3.35348 9.35352C3.15822 9.54878 2.84171 9.54878 2.64645 9.35352C2.45118 9.15825 2.45118 8.84175 2.64645 8.64648L7.79293 3.5H4.99996C4.72382 3.5 4.49996 3.27614 4.49996 3C4.49996 2.72386 4.72382 2.5 4.99996 2.5H8.99996C9.2761 2.5 9.49996 2.72386 9.49996 3V7Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 9.33301C12.6667 9.7012 12.3682 9.99967 12 9.99967C11.6318 9.99967 11.3333 9.7012 11.3333 9.33301V5.60905L4.47134 12.471C4.211 12.7314 3.78899 12.7314 3.52864 12.471C3.26829 12.2107 3.26829 11.7887 3.52864 11.5283L10.3906 4.66634H6.66666C6.29847 4.66634 5.99999 4.36786 5.99999 3.99967C5.99999 3.63148 6.29847 3.33301 6.66666 3.33301H12C12.3682 3.33301 12.6667 3.63148 12.6667 3.99967V9.33301Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8334 11.667C15.8334 12.1272 15.4603 12.5003 15 12.5003C14.5398 12.5003 14.1667 12.1272 14.1667 11.667V7.01204L5.58921 15.5895C5.26377 15.915 4.73626 15.915 4.41083 15.5895C4.08539 15.2641 4.08539 14.7366 4.41083 14.4111L12.9883 5.83366H8.33335C7.87311 5.83366 7.50002 5.46056 7.50002 5.00033C7.50002 4.54009 7.87311 4.16699 8.33335 4.16699H15C15.4603 4.16699 15.8334 4.54009 15.8334 5.00033V11.667Z" fill="currentColor" />
    </svg>
  );
};

export const variants = createIconVariantMap({
  filled: {
    12: Filled12,
    16: Filled16,
    20: Filled20,
  },
  outlined: {
    12: Outlined12,
    16: Outlined16,
    20: Outlined20,
  },
});

export const IconArrowNarrowUpRight: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"arrow-narrow-up-right"} {...props} />
);
