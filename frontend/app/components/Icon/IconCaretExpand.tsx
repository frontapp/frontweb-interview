import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.98782 4.50098C8.43754 4.50113 8.66322 5.04517 8.34524 5.36328L6.35696 7.35107L6.31888 7.38574C6.13378 7.53673 5.86632 7.53668 5.68118 7.38574L5.64309 7.35107L3.65481 5.36328C3.33672 5.04518 3.56229 4.50098 4.01224 4.50098H7.98782Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6505 6.00098C11.2501 6.00118 11.551 6.72656 11.127 7.15072L8.47599 9.80111L8.42521 9.84733C8.17842 10.0486 7.8218 10.0486 7.57495 9.84733L7.52417 9.80111L4.87313 7.15072C4.449 6.72658 4.74976 6.00098 5.34969 6.00098H10.6505Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3131 7.50195C14.0626 7.50221 14.4388 8.40893 13.9088 8.93913L10.595 12.2521L10.5315 12.3099C10.2231 12.5615 9.77729 12.5615 9.46872 12.3099L9.40524 12.2521L6.09144 8.93913C5.56129 8.40896 5.93723 7.50195 6.68714 7.50195H13.3131Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.98782 4.50098C8.43754 4.50113 8.66322 5.04517 8.34524 5.36328L6.35696 7.35107L6.31888 7.38574C6.13378 7.53673 5.86632 7.53668 5.68118 7.38574L5.64309 7.35107L3.65481 5.36328C3.33672 5.04518 3.56229 4.50098 4.01224 4.50098H7.98782Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.6505 6.00098C11.2501 6.00118 11.551 6.72656 11.127 7.15072L8.47599 9.80111L8.42521 9.84733C8.17842 10.0486 7.8218 10.0486 7.57495 9.84733L7.52417 9.80111L4.87313 7.15072C4.449 6.72658 4.74976 6.00098 5.34969 6.00098H10.6505Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3131 7.50195C14.0626 7.50221 14.4388 8.40893 13.9088 8.93913L10.595 12.2521L10.5315 12.3099C10.2231 12.5615 9.77729 12.5615 9.46872 12.3099L9.40524 12.2521L6.09144 8.93913C5.56129 8.40896 5.93723 7.50195 6.68714 7.50195H13.3131Z" fill="currentColor" />
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

export const IconCaretExpand: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"caret-expand"} {...props} />
);
