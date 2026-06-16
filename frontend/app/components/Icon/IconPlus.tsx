import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 2.5C6.5 2.22386 6.27614 2 6 2C5.72386 2 5.5 2.22386 5.5 2.5V5.5H2.5C2.22386 5.5 2 5.72386 2 6C2 6.27614 2.22386 6.5 2.5 6.5H5.5V9.5C5.5 9.77614 5.72386 10 6 10C6.27614 10 6.5 9.77614 6.5 9.5V6.5H9.5C9.77614 6.5 10 6.27614 10 6C10 5.72386 9.77614 5.5 9.5 5.5H6.5V2.5Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66675 3.33366C8.66675 2.96547 8.36827 2.66699 8.00008 2.66699C7.63189 2.66699 7.33341 2.96547 7.33341 3.33366V7.33366H3.33341C2.96522 7.33366 2.66675 7.63214 2.66675 8.00033C2.66675 8.36852 2.96522 8.66699 3.33341 8.66699H7.33341V12.667C7.33341 13.0352 7.63189 13.3337 8.00008 13.3337C8.36827 13.3337 8.66675 13.0352 8.66675 12.667V8.66699H12.6667C13.0349 8.66699 13.3334 8.36852 13.3334 8.00033C13.3334 7.63214 13.0349 7.33366 12.6667 7.33366H8.66675V3.33366Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8333 4.16634C10.8333 3.7061 10.4602 3.33301 9.99992 3.33301C9.53968 3.33301 9.16658 3.7061 9.16658 4.16634V9.16634H4.16659C3.70635 9.16634 3.33325 9.53944 3.33325 9.99967C3.33325 10.4599 3.70635 10.833 4.16659 10.833H9.16658V15.833C9.16658 16.2932 9.53968 16.6663 9.99992 16.6663C10.4602 16.6663 10.8333 16.2932 10.8333 15.833V10.833H15.8333C16.2935 10.833 16.6666 10.4599 16.6666 9.99967C16.6666 9.53944 16.2935 9.16634 15.8333 9.16634H10.8333V4.16634Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 9.5V6.5H2.5C2.22386 6.5 2 6.27614 2 6C2 5.72386 2.22386 5.5 2.5 5.5H5.5V2.5C5.5 2.22386 5.72386 2 6 2C6.27614 2 6.5 2.22386 6.5 2.5V5.5H9.5C9.77614 5.5 10 5.72386 10 6C10 6.27614 9.77614 6.5 9.5 6.5H6.5V9.5C6.5 9.77614 6.27614 10 6 10C5.72386 10 5.5 9.77614 5.5 9.5Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.33341 12.667V8.66699H3.33341C2.96522 8.66699 2.66675 8.36852 2.66675 8.00033C2.66675 7.63214 2.96522 7.33366 3.33341 7.33366H7.33341V3.33366C7.33341 2.96547 7.63189 2.66699 8.00008 2.66699C8.36827 2.66699 8.66675 2.96547 8.66675 3.33366V7.33366H12.6667C13.0349 7.33366 13.3334 7.63214 13.3334 8.00033C13.3334 8.36852 13.0349 8.66699 12.6667 8.66699H8.66675V12.667C8.66675 13.0352 8.36827 13.3337 8.00008 13.3337C7.63189 13.3337 7.33341 13.0352 7.33341 12.667Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16658 15.833V10.833H4.16659C3.70635 10.833 3.33325 10.4599 3.33325 9.99967C3.33325 9.53944 3.70635 9.16634 4.16659 9.16634H9.16658V4.16634C9.16658 3.7061 9.53968 3.33301 9.99992 3.33301C10.4602 3.33301 10.8333 3.7061 10.8333 4.16634V9.16634H15.8333C16.2935 9.16634 16.6666 9.53944 16.6666 9.99967C16.6666 10.4599 16.2935 10.833 15.8333 10.833H10.8333V15.833C10.8333 16.2932 10.4602 16.6663 9.99992 16.6663C9.53968 16.6663 9.16658 16.2932 9.16658 15.833Z" fill="currentColor" />
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

export const IconPlus: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"plus"} {...props} />
);
