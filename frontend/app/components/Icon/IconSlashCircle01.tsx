import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0.5C2.96243 0.5 0.5 2.96243 0.5 6C0.5 9.03757 2.96243 11.5 6 11.5C9.03757 11.5 11.5 9.03757 11.5 6C11.5 2.96243 9.03757 0.5 6 0.5ZM3.19116 2.48405C3.96099 1.86824 4.93749 1.5 6 1.5C8.48528 1.5 10.5 3.51472 10.5 6C10.5 7.06251 10.1318 8.03901 9.51595 8.80884L3.19116 2.48405ZM2.48405 3.19116C1.86824 3.96099 1.5 4.93749 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C7.06251 10.5 8.03901 10.1318 8.80884 9.51595L2.48405 3.19116Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.00008 0.666992C3.94999 0.666992 0.666748 3.95024 0.666748 8.00033C0.666748 12.0504 3.94999 15.3337 8.00008 15.3337C12.0502 15.3337 15.3334 12.0504 15.3334 8.00033C15.3334 3.95024 12.0502 0.666992 8.00008 0.666992ZM4.25496 3.31239C5.2814 2.49131 6.58341 2.00033 8.00008 2.00033C11.3138 2.00033 14.0001 4.68662 14.0001 8.00033C14.0001 9.417 13.5091 10.719 12.688 11.7454L4.25496 3.31239ZM3.31215 4.2552C2.49106 5.28165 2.00008 6.58365 2.00008 8.00033C2.00008 11.314 4.68637 14.0003 8.00008 14.0003C9.41676 14.0003 10.7188 13.5093 11.7452 12.6883L3.31215 4.2552Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.99992 0.833008C4.93731 0.833008 0.833252 4.93706 0.833252 9.99967C0.833252 15.0623 4.93731 19.1663 9.99992 19.1663C15.0625 19.1663 19.1666 15.0623 19.1666 9.99967C19.1666 4.93706 15.0625 0.833008 9.99992 0.833008ZM5.31851 4.13976C6.60157 3.1134 8.22907 2.49967 9.99992 2.49967C14.1421 2.49967 17.4999 5.85754 17.4999 9.99967C17.4999 11.7705 16.8862 13.398 15.8598 14.6811L5.31851 4.13976ZM4.14 5.31827C3.11365 6.60133 2.49992 8.22883 2.49992 9.99967C2.49992 14.1418 5.85778 17.4997 9.99992 17.4997C11.7708 17.4997 13.3983 16.8859 14.6813 15.8596L4.14 5.31827Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_14551)">
        <path d="M10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C4.93749 1.5 3.96124 1.86856 3.19141 2.48438L9.51514 8.80811C10.1309 8.03828 10.5 7.06248 10.5 6ZM1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C7.06248 10.5 8.03828 10.1309 8.80811 9.51514L2.48438 3.19141C1.86856 3.96124 1.5 4.93749 1.5 6ZM11.5 6C11.5 9.03757 9.03757 11.5 6 11.5C2.96243 11.5 0.5 9.03757 0.5 6C0.5 2.96243 2.96243 0.5 6 0.5C9.03757 0.5 11.5 2.96243 11.5 6Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_14551">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_14549)">
        <path d="M14.0001 8.00033C14.0001 4.68662 11.3138 2.00033 8.00008 2.00033C6.5834 2.00033 5.28174 2.49174 4.25529 3.31283L12.6869 11.7445C13.508 10.718 14.0001 9.41697 14.0001 8.00033ZM2.00008 8.00033C2.00008 11.314 4.68637 14.0003 8.00008 14.0003C9.41673 14.0003 10.7178 13.5082 11.7442 12.6872L3.31258 4.25553C2.49149 5.28198 2.00008 6.58365 2.00008 8.00033ZM15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_14549">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6165_14547)">
        <path d="M17.4999 9.99967C17.4999 5.85754 14.1421 2.49967 9.99992 2.49967C8.22907 2.49967 6.60199 3.11394 5.31893 4.1403L15.8585 14.6799C16.8848 13.3968 17.4999 11.7705 17.4999 9.99967ZM2.49992 9.99967C2.49992 14.1418 5.85778 17.4997 9.99992 17.4997C11.7707 17.4997 13.397 16.8846 14.6801 15.8582L4.14054 5.31869C3.11418 6.60175 2.49992 8.22883 2.49992 9.99967ZM19.1666 9.99967C19.1666 15.0623 15.0625 19.1663 9.99992 19.1663C4.93731 19.1663 0.833252 15.0623 0.833252 9.99967C0.833252 4.93706 4.93731 0.833008 9.99992 0.833008C15.0625 0.833008 19.1666 4.93706 19.1666 9.99967Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_6165_14547">
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

export const IconSlashCircle01: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"slash-circle-01"} {...props} />
);
