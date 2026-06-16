import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00002 0.666992C3.94993 0.666992 0.666687 3.95024 0.666687 8.00033C0.666687 12.0504 3.94993 15.3337 8.00002 15.3337C12.0501 15.3337 15.3334 12.0504 15.3334 8.00033C15.3334 3.95024 12.0501 0.666992 8.00002 0.666992Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99998 0.833008C4.93737 0.833008 0.833313 4.93706 0.833313 9.99967C0.833313 15.0623 4.93737 19.1663 9.99998 19.1663C15.0626 19.1663 19.1666 15.0623 19.1666 9.99967C19.1666 4.93706 15.0626 0.833008 9.99998 0.833008Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_11432_7104)">
        <path d="M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6ZM11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_11432_7104">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_11432_7101)">
        <path d="M14 8.00033C14 4.68662 11.3137 2.00033 8.00002 2.00033C4.68631 2.00033 2.00002 4.68662 2.00002 8.00033C2.00002 11.314 4.68631 14.0003 8.00002 14.0003C11.3137 14.0003 14 11.314 14 8.00033ZM15.3334 8.00033C15.3334 12.0504 12.0501 15.3337 8.00002 15.3337C3.94993 15.3337 0.666687 12.0504 0.666687 8.00033C0.666687 3.95024 3.94993 0.666992 8.00002 0.666992C12.0501 0.666992 15.3334 3.95024 15.3334 8.00033Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_11432_7101">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_11432_7105)">
        <path d="M17.5 9.99967C17.5 5.85754 14.1421 2.49967 9.99998 2.49967C5.85784 2.49967 2.49998 5.85754 2.49998 9.99967C2.49998 14.1418 5.85784 17.4997 9.99998 17.4997C14.1421 17.4997 17.5 14.1418 17.5 9.99967ZM19.1666 9.99967C19.1666 15.0623 15.0626 19.1663 9.99998 19.1663C4.93737 19.1663 0.833313 15.0623 0.833313 9.99967C0.833313 4.93706 4.93737 0.833008 9.99998 0.833008C15.0626 0.833008 19.1666 4.93706 19.1666 9.99967Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_11432_7105">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
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

export const IconCircle: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"circle"} {...props} />
);
