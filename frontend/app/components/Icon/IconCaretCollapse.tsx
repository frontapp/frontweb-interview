import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.6812 4.61421C5.86632 4.46326 6.13377 4.4632 6.31889 4.61421L6.35698 4.64888L8.34526 6.63668C8.66316 6.95476 8.43763 7.49885 7.98784 7.49898H4.01225C3.56236 7.49898 3.33667 6.95482 3.65483 6.63668L5.64311 4.64888L5.6812 4.61421Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57497 6.15196C7.8218 5.95069 8.1784 5.95061 8.42523 6.15196L8.47601 6.19818L11.1271 8.84857C11.5509 9.27268 11.2502 9.99815 10.6505 9.99831H5.34971C4.74986 9.99831 4.44894 9.27277 4.87315 8.84857L7.52419 6.19818L7.57497 6.15196Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.46868 7.69068C9.77722 7.43909 10.223 7.439 10.5315 7.69068L10.595 7.74846L13.9088 11.0615C14.4386 11.5916 14.0627 12.4984 13.3131 12.4986H6.6871C5.93729 12.4986 5.56114 11.5917 6.0914 11.0615L9.4052 7.74846L9.46868 7.69068Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.6812 4.61421C5.86632 4.46326 6.13377 4.4632 6.31889 4.61421L6.35698 4.64888L8.34526 6.63668C8.66316 6.95476 8.43763 7.49885 7.98784 7.49898H4.01225C3.56236 7.49898 3.33667 6.95482 3.65483 6.63668L5.64311 4.64888L5.6812 4.61421Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57497 6.15196C7.8218 5.95069 8.1784 5.95061 8.42523 6.15196L8.47601 6.19818L11.1271 8.84857C11.5509 9.27268 11.2502 9.99815 10.6505 9.99831H5.34971C4.74986 9.99831 4.44894 9.27277 4.87315 8.84857L7.52419 6.19818L7.57497 6.15196Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.46868 7.69068C9.77722 7.43909 10.223 7.439 10.5315 7.69068L10.595 7.74846L13.9088 11.0615C14.4386 11.5916 14.0627 12.4984 13.3131 12.4986H6.6871C5.93729 12.4986 5.56114 11.5917 6.0914 11.0615L9.4052 7.74846L9.46868 7.69068Z" fill="currentColor" />
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

export const IconCaretCollapse: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"caret-collapse"} {...props} />
);
