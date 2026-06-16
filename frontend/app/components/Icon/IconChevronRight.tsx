import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.14645 2.64645C4.34171 2.45118 4.65829 2.45118 4.85355 2.64645L7.85355 5.64645C8.04882 5.84171 8.04882 6.15829 7.85355 6.35355L4.85355 9.35355C4.65829 9.54882 4.34171 9.54882 4.14645 9.35355C3.95118 9.15829 3.95118 8.84171 4.14645 8.64645L6.79289 6L4.14645 3.35355C3.95118 3.15829 3.95118 2.84171 4.14645 2.64645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.52864 3.52827C5.78899 3.26792 6.2111 3.26792 6.47145 3.52827L10.4714 7.52827C10.7318 7.78862 10.7318 8.21073 10.4714 8.47108L6.47145 12.4711C6.2111 12.7314 5.78899 12.7314 5.52864 12.4711C5.26829 12.2107 5.26829 11.7886 5.52864 11.5283L9.05723 7.99967L5.52864 4.47108C5.26829 4.21073 5.26829 3.78862 5.52864 3.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.9107 4.41107C7.23614 4.08563 7.76378 4.08563 8.08921 4.41107L13.0892 9.41107C13.4147 9.73651 13.4147 10.2641 13.0892 10.5896L8.08921 15.5896C7.76378 15.915 7.23614 15.915 6.9107 15.5896C6.58527 15.2641 6.58527 14.7365 6.9107 14.4111L11.3214 10.0003L6.9107 5.58958C6.58527 5.26414 6.58527 4.73651 6.9107 4.41107Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.14645 2.64637C4.3295 2.46331 4.61901 2.45201 4.81539 2.61219L4.85348 2.64637L7.85348 5.64637C8.04874 5.84163 8.04874 6.15814 7.85348 6.3534L4.85348 9.3534C4.65822 9.54866 4.34171 9.54866 4.14645 9.3534C3.95118 9.15814 3.95118 8.84163 4.14645 8.64637L6.79293 5.99988L4.14645 3.3534L4.11227 3.31531C3.95209 3.11893 3.96339 2.82943 4.14645 2.64637Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.52864 3.52816C5.77271 3.28409 6.15871 3.26902 6.42056 3.48259L6.47134 3.52816L10.4713 7.52816C10.7317 7.78851 10.7317 8.21052 10.4713 8.47087L6.47134 12.4709C6.211 12.7312 5.78899 12.7312 5.52864 12.4709C5.26829 12.2105 5.26829 11.7885 5.52864 11.5282L9.05728 7.99952L5.52864 4.47087L5.48306 4.42009C5.2695 4.15824 5.28456 3.77224 5.52864 3.52816Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.91083 4.41094C7.21592 4.10584 7.69842 4.08701 8.02573 4.35397L8.08921 4.41094L13.0892 9.41094C13.4146 9.73637 13.4146 10.2639 13.0892 10.5893L8.08921 15.5893C7.76377 15.9148 7.23626 15.9148 6.91083 15.5893C6.58539 15.2639 6.58539 14.7364 6.91083 14.4109L11.3216 10.0001L6.91083 5.58932L6.85386 5.52585C6.5869 5.19853 6.60573 4.71603 6.91083 4.41094Z" fill="currentColor" />
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

export const IconChevronRight: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"chevron-right"} {...props} />
);
