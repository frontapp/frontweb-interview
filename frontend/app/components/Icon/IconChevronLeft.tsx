import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.85355 2.64645C8.04882 2.84171 8.04882 3.15829 7.85355 3.35355L5.20711 6L7.85355 8.64645C8.04882 8.84171 8.04882 9.15829 7.85355 9.35355C7.65829 9.54882 7.34171 9.54882 7.14645 9.35355L4.14645 6.35355C3.95118 6.15829 3.95118 5.84171 4.14645 5.64645L7.14645 2.64645C7.34171 2.45118 7.65829 2.45118 7.85355 2.64645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.4714 3.52827C10.7318 3.78862 10.7318 4.21073 10.4714 4.47108L6.94285 7.99967L10.4714 11.5283C10.7318 11.7886 10.7318 12.2107 10.4714 12.4711C10.2111 12.7314 9.78899 12.7314 9.52864 12.4711L5.52864 8.47108C5.26829 8.21073 5.26829 7.78862 5.52864 7.52827L9.52864 3.52827C9.78899 3.26792 10.2111 3.26792 10.4714 3.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0892 4.41107C13.4147 4.73651 13.4147 5.26414 13.0892 5.58958L8.67847 10.0003L13.0892 14.4111C13.4147 14.7365 13.4147 15.2641 13.0892 15.5896C12.7638 15.915 12.2361 15.915 11.9107 15.5896L6.9107 10.5896C6.58527 10.2641 6.58527 9.73651 6.9107 9.41107L11.9107 4.41107C12.2361 4.08563 12.7638 4.08563 13.0892 4.41107Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.14645 2.64645C7.34171 2.45118 7.65822 2.45118 7.85348 2.64645C8.04874 2.84171 8.04874 3.15822 7.85348 3.35348L5.20699 5.99996L7.85348 8.64645L7.88766 8.68453C8.04783 8.88092 8.03654 9.17042 7.85348 9.35348C7.67042 9.53654 7.38092 9.54783 7.18453 9.38766L7.14645 9.35348L4.14645 6.35348C3.95118 6.15822 3.95118 5.84171 4.14645 5.64645L7.14645 2.64645Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.52864 3.52827C9.78899 3.26792 10.211 3.26792 10.4713 3.52827C10.7317 3.78862 10.7317 4.21063 10.4713 4.47098L6.9427 7.99962L10.4713 11.5283L10.5169 11.5791C10.7305 11.8409 10.7154 12.2269 10.4713 12.471C10.2273 12.7151 9.84127 12.7301 9.57942 12.5166L9.52864 12.471L5.52864 8.47098C5.26829 8.21063 5.26829 7.78862 5.52864 7.52827L9.52864 3.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9108 4.41107C12.2363 4.08563 12.7638 4.08563 13.0892 4.41107C13.4146 4.73651 13.4146 5.26402 13.0892 5.58946L8.6784 10.0003L13.0892 14.4111L13.1462 14.4745C13.4131 14.8019 13.3943 15.2844 13.0892 15.5895C12.7841 15.8946 12.3016 15.9134 11.9743 15.6464L11.9108 15.5895L6.91083 10.5895C6.58539 10.264 6.58539 9.73651 6.91083 9.41107L11.9108 4.41107Z" fill="currentColor" />
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

export const IconChevronLeft: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"chevron-left"} {...props} />
);
