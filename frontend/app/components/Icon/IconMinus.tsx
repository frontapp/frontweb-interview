import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.72386 2.22386 5.5 2.5 5.5H9.5C9.77614 5.5 10 5.72386 10 6C10 6.27614 9.77614 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27614 2 6Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.66675 7.99967C2.66675 7.63148 2.96522 7.33301 3.33341 7.33301H12.6667C13.0349 7.33301 13.3334 7.63148 13.3334 7.99967C13.3334 8.36786 13.0349 8.66634 12.6667 8.66634H3.33341C2.96522 8.66634 2.66675 8.36786 2.66675 7.99967Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.33325 10.0003C3.33325 9.54009 3.70635 9.16699 4.16659 9.16699H15.8333C16.2935 9.16699 16.6666 9.54009 16.6666 10.0003C16.6666 10.4606 16.2935 10.8337 15.8333 10.8337H4.16659C3.70635 10.8337 3.33325 10.4606 3.33325 10.0003Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.5 5.5C9.77614 5.5 10 5.72386 10 6C10 6.27614 9.77614 6.5 9.5 6.5H2.5C2.22386 6.5 2 6.27614 2 6C2 5.72386 2.22386 5.5 2.5 5.5H9.5Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.6667 7.33301C13.0349 7.33301 13.3334 7.63148 13.3334 7.99967C13.3334 8.36786 13.0349 8.66634 12.6667 8.66634H3.33341C2.96522 8.66634 2.66675 8.36786 2.66675 7.99967C2.66675 7.63148 2.96522 7.33301 3.33341 7.33301H12.6667Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 9.16699C16.2935 9.16699 16.6666 9.54009 16.6666 10.0003C16.6666 10.4606 16.2935 10.8337 15.8333 10.8337H4.16659C3.70635 10.8337 3.33325 10.4606 3.33325 10.0003C3.33325 9.54009 3.70635 9.16699 4.16659 9.16699H15.8333Z" fill="currentColor" />
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

export const IconMinus: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"minus"} {...props} />
);
