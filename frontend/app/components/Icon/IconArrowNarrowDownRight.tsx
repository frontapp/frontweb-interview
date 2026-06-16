import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.85355 2.64645C3.65829 2.45118 3.34171 2.45118 3.14645 2.64645C2.95118 2.84171 2.95118 3.15829 3.14645 3.35355L8.29289 8.5H5.5C5.22386 8.5 5 8.72386 5 9C5 9.27614 5.22386 9.5 5.5 9.5H9.5C9.77614 9.5 10 9.27614 10 9V5C10 4.72386 9.77614 4.5 9.5 4.5C9.22386 4.5 9 4.72386 9 5V7.79289L3.85355 2.64645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.13807 3.52827C3.87772 3.26792 3.45561 3.26792 3.19526 3.52827C2.93491 3.78862 2.93491 4.21073 3.19526 4.47108L10.0572 11.333H6.33333C5.96514 11.333 5.66667 11.6315 5.66667 11.9997C5.66667 12.3679 5.96514 12.6663 6.33333 12.6663H11.6667C12.0349 12.6663 12.3333 12.3679 12.3333 11.9997V6.66634C12.3333 6.29815 12.0349 5.99967 11.6667 5.99967C11.2985 5.99967 11 6.29815 11 6.66634V10.3902L4.13807 3.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.42259 4.41107C5.09715 4.08563 4.56951 4.08563 4.24408 4.41107C3.91864 4.73651 3.91864 5.26414 4.24408 5.58958L12.8215 14.167H8.16667C7.70643 14.167 7.33333 14.5401 7.33333 15.0003C7.33333 15.4606 7.70643 15.8337 8.16667 15.8337H14.8333C15.2936 15.8337 15.6667 15.4606 15.6667 15.0003V8.33366C15.6667 7.87342 15.2936 7.50033 14.8333 7.50033C14.3731 7.50033 14 7.87342 14 8.33366V12.9885L5.42259 4.41107Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.14637 2.64637C3.32943 2.46331 3.61893 2.45201 3.81531 2.61219L3.8534 2.64637L8.99988 7.79285V4.99988C8.99988 4.72374 9.22374 4.49988 9.49988 4.49988C9.77603 4.49988 9.99988 4.72374 9.99988 4.99988V8.99988C9.99988 9.27603 9.77603 9.49988 9.49988 9.49988H5.49988C5.22374 9.49988 4.99988 9.27603 4.99988 8.99988C4.99988 8.72374 5.22374 8.49988 5.49988 8.49988H8.29285L3.14637 3.3534L3.11219 3.31531C2.95201 3.11893 2.96331 2.82943 3.14637 2.64637Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.19516 3.52816C3.43923 3.28409 3.82523 3.26902 4.08708 3.48259L4.13786 3.52816L10.9998 10.3901V6.66618C10.9998 6.29799 11.2983 5.99952 11.6665 5.99952C12.0347 5.99952 12.3332 6.29799 12.3332 6.66618V11.9995C12.3332 12.3677 12.0347 12.6662 11.6665 12.6662H6.33318C5.96499 12.6662 5.66651 12.3677 5.66651 11.9995C5.66651 11.6313 5.96499 11.3329 6.33318 11.3329H10.0571L3.19516 4.47087L3.14958 4.42009C2.93602 4.15824 2.95108 3.77224 3.19516 3.52816Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.24395 4.41094C4.54904 4.10584 5.03154 4.08701 5.35885 4.35397L5.42233 4.41094L13.9998 12.9884V8.33346C13.9998 7.87323 14.3729 7.50013 14.8331 7.50013C15.2934 7.50013 15.6665 7.87323 15.6665 8.33346V15.0001C15.6665 15.4604 15.2934 15.8335 14.8331 15.8335H8.16647C7.70623 15.8335 7.33314 15.4604 7.33314 15.0001C7.33314 14.5399 7.70623 14.1668 8.16647 14.1668H12.8214L4.24395 5.58932L4.18698 5.52585C3.92002 5.19853 3.93885 4.71603 4.24395 4.41094Z" fill="currentColor" />
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

export const IconArrowNarrowDownRight: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"arrow-narrow-down-right"} {...props} />
);
