import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0.50293C9.03757 0.50293 11.5 2.96536 11.5 6.00293C11.5 8.66217 9.61268 10.8802 7.10449 11.3916V4.48047H5.85059L4.04297 5.6416V6.84863L5.74414 5.76172H5.78711V11.4971C2.84824 11.3852 0.5 8.96918 0.5 6.00293C0.5 2.96536 2.96243 0.50293 6 0.50293Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0.666016C12.05 0.666038 15.3328 3.9491 15.333 7.99902C15.333 12.0491 12.0501 15.333 8 15.333C3.94991 15.333 0.666992 12.0491 0.666992 7.99902C0.667168 3.94908 3.95002 0.666016 8 0.666016ZM7.85059 6.72656L6.04297 7.8877V9.09473L7.74414 8.00781H7.78711V13.999H9.10449V6.72656H7.85059Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0.833984C15.0626 0.833984 19.167 4.93837 19.167 10.001C19.1668 15.0634 15.0625 19.167 10 19.167C4.93752 19.167 0.833184 15.0634 0.833008 10.001C0.833008 4.93838 4.93741 0.834007 10 0.833984ZM9.82129 5.27344L7.65234 6.66699V8.11621L9.69336 6.8125H9.74414V14.001H11.3252V5.27344H9.82129Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16329_25569)">
        <path d="M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C8.48528 10.5 10.5 8.48528 10.5 6ZM11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" fill="currentColor" />
        <path d="M7.1044 4.47727V11.75H5.78693V5.75923H5.74432L4.04332 6.84588V5.63849L5.85085 4.47727H7.1044Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_16329_25569">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16329_25567)">
        <path d="M14 8.00033C14 4.68662 11.3137 2.00033 7.99996 2.00033C4.68625 2.00033 1.99996 4.68662 1.99996 8.00033C1.99996 11.314 4.68625 14.0003 7.99996 14.0003C11.3137 14.0003 14 11.314 14 8.00033ZM15.3333 8.00033C15.3333 12.0504 12.05 15.3337 7.99996 15.3337C3.94987 15.3337 0.666626 12.0504 0.666626 8.00033C0.666626 3.95024 3.94987 0.666992 7.99996 0.666992C12.05 0.666992 15.3333 3.95024 15.3333 8.00033Z" fill="currentColor" />
        <path d="M9.1044 6.72727V14H7.78693V8.00923H7.74432L6.04332 9.09588V7.88849L7.85085 6.72727H9.1044Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_16329_25567">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_16329_25565)">
        <path d="M17.5 9.99967C17.5 5.85754 14.1422 2.49967 10 2.49967C5.8579 2.49967 2.50004 5.85754 2.50004 9.99967C2.50004 14.1418 5.8579 17.4997 10 17.4997C14.1422 17.4997 17.5 14.1418 17.5 9.99967ZM19.1667 9.99967C19.1667 15.0623 15.0627 19.1663 10 19.1663C4.93743 19.1663 0.833374 15.0623 0.833374 9.99967C0.833374 4.93706 4.93743 0.833008 10 0.833008C15.0627 0.833008 19.1667 4.93706 19.1667 9.99967Z" fill="currentColor" />
        <path d="M11.3253 5.27273V14H9.74432V6.81108H9.69318L7.65199 8.11506V6.66619L9.82102 5.27273H11.3253Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_16329_25565">
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

export const IconBadgeCounter: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"badge-counter"} {...props} />
);
