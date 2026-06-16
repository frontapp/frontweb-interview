import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5ZM4 5.5C3.72386 5.5 3.5 5.72386 3.5 6C3.5 6.27614 3.72386 6.5 4 6.5H8C8.27614 6.5 8.5 6.27614 8.5 6C8.5 5.72386 8.27614 5.5 8 5.5H4Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.99996 0.666992C3.94987 0.666992 0.666626 3.95024 0.666626 8.00033C0.666626 12.0504 3.94987 15.3337 7.99996 15.3337C12.05 15.3337 15.3333 12.0504 15.3333 8.00033C15.3333 3.95024 12.05 0.666992 7.99996 0.666992ZM5.33329 7.33366C4.9651 7.33366 4.66663 7.63214 4.66663 8.00033C4.66663 8.36852 4.9651 8.66699 5.33329 8.66699H10.6666C11.0348 8.66699 11.3333 8.36852 11.3333 8.00033C11.3333 7.63214 11.0348 7.33366 10.6666 7.33366H5.33329Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 0.833008C4.93743 0.833008 0.833374 4.93706 0.833374 9.99967C0.833374 15.0623 4.93743 19.1663 10 19.1663C15.0627 19.1663 19.1667 15.0623 19.1667 9.99967C19.1667 4.93706 15.0627 0.833008 10 0.833008ZM6.66671 9.16634C6.20647 9.16634 5.83337 9.53944 5.83337 9.99967C5.83337 10.4599 6.20647 10.833 6.66671 10.833H13.3334C13.7936 10.833 14.1667 10.4599 14.1667 9.99967C14.1667 9.53944 13.7936 9.16634 13.3334 9.16634H6.66671Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_15467)">
        <path d="M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6ZM8 5.5C8.27614 5.5 8.5 5.72386 8.5 6C8.5 6.27614 8.27614 6.5 8 6.5H4C3.72386 6.5 3.5 6.27614 3.5 6C3.5 5.72386 3.72386 5.5 4 5.5H8ZM11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_15467">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_15465)">
        <path d="M14 8.00033C14 4.68662 11.3137 2.00033 7.99996 2.00033C4.68625 2.00033 1.99996 4.68662 1.99996 8.00033C1.99996 11.314 4.68625 14.0003 7.99996 14.0003C11.3137 14.0003 14 11.314 14 8.00033ZM10.6666 7.33366C11.0348 7.33366 11.3333 7.63214 11.3333 8.00033C11.3333 8.36852 11.0348 8.66699 10.6666 8.66699H5.33329C4.9651 8.66699 4.66663 8.36852 4.66663 8.00033C4.66663 7.63214 4.9651 7.33366 5.33329 7.33366H10.6666ZM15.3333 8.00033C15.3333 12.0504 12.05 15.3337 7.99996 15.3337C3.94987 15.3337 0.666626 12.0504 0.666626 8.00033C0.666626 3.95024 3.94987 0.666992 7.99996 0.666992C12.05 0.666992 15.3333 3.95024 15.3333 8.00033Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_15465">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_15463)">
        <path d="M17.5 9.99967C17.5 5.85754 14.1422 2.49967 10 2.49967C5.85791 2.49967 2.50004 5.85754 2.50004 9.99967C2.50004 14.1418 5.85791 17.4997 10 17.4997C14.1422 17.4997 17.5 14.1418 17.5 9.99967ZM13.3334 9.16634C13.7936 9.16634 14.1667 9.53944 14.1667 9.99967C14.1667 10.4599 13.7936 10.833 13.3334 10.833H6.66671C6.20647 10.833 5.83337 10.4599 5.83337 9.99967C5.83337 9.53944 6.20647 9.16634 6.66671 9.16634H13.3334ZM19.1667 9.99967C19.1667 15.0623 15.0627 19.1663 10 19.1663C4.93743 19.1663 0.833374 15.0623 0.833374 9.99967C0.833374 4.93706 4.93743 0.833008 10 0.833008C15.0627 0.833008 19.1667 4.93706 19.1667 9.99967Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_15463">
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

export const IconMinusCircle: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"minus-circle"} {...props} />
);
