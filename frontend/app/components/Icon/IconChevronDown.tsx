import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.64645 4.14645C2.84171 3.95118 3.15829 3.95118 3.35355 4.14645L6 6.79289L8.64645 4.14645C8.84171 3.95118 9.15829 3.95118 9.35355 4.14645C9.54882 4.34171 9.54882 4.65829 9.35355 4.85355L6.35355 7.85355C6.15829 8.04882 5.84171 8.04882 5.64645 7.85355L2.64645 4.85355C2.45118 4.65829 2.45118 4.34171 2.64645 4.14645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.52851 5.52827C3.78886 5.26792 4.21097 5.26792 4.47132 5.52827L7.99992 9.05687L11.5285 5.52827C11.7889 5.26792 12.211 5.26792 12.4713 5.52827C12.7317 5.78862 12.7317 6.21073 12.4713 6.47108L8.47132 10.4711C8.21097 10.7314 7.78886 10.7314 7.52851 10.4711L3.52851 6.47108C3.26816 6.21073 3.26816 5.78862 3.52851 5.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.41083 6.91107C4.73626 6.58563 5.2639 6.58563 5.58934 6.91107L10.0001 11.3218L14.4108 6.91107C14.7363 6.58563 15.2639 6.58563 15.5893 6.91107C15.9148 7.23651 15.9148 7.76414 15.5893 8.08958L10.5893 13.0896C10.2639 13.415 9.73626 13.415 9.41083 13.0896L4.41083 8.08958C4.08539 7.76414 4.08539 7.23651 4.41083 6.91107Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.64637 4.14645C8.84163 3.95118 9.15814 3.95118 9.3534 4.14645C9.54866 4.34171 9.54866 4.65822 9.3534 4.85348L6.3534 7.85348C6.15814 8.04874 5.84163 8.04874 5.64637 7.85348L2.64637 4.85348L2.61219 4.81539C2.45201 4.61901 2.46331 4.3295 2.64637 4.14645C2.82943 3.96339 3.11893 3.95209 3.31531 4.11227L3.3534 4.14645L5.99988 6.79293L8.64637 4.14645Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5287 5.52827C11.789 5.26792 12.211 5.26792 12.4714 5.52827C12.7317 5.78862 12.7317 6.21063 12.4714 6.47098L8.47136 10.471C8.21101 10.7313 7.789 10.7313 7.52865 10.471L3.52865 6.47098L3.48308 6.4202C3.26951 6.15835 3.28458 5.77235 3.52865 5.52827C3.77273 5.28419 4.15873 5.26913 4.42058 5.4827L4.47136 5.52827L8.00001 9.05692L11.5287 5.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.4107 6.91107C14.7361 6.58563 15.2636 6.58563 15.5891 6.91107C15.9145 7.23651 15.9145 7.76402 15.5891 8.08946L10.5891 13.0895C10.2636 13.4149 9.73613 13.4149 9.41069 13.0895L4.41069 8.08946L4.35373 8.02598C4.08677 7.69867 4.1056 7.21617 4.41069 6.91107C4.71579 6.60597 5.19829 6.58715 5.5256 6.8541L5.58908 6.91107L9.99989 11.3219L14.4107 6.91107Z" fill="currentColor" />
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

export const IconChevronDown: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"chevron-down"} {...props} />
);
