import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 2C6.5 1.72386 6.27614 1.5 6 1.5C5.72386 1.5 5.5 1.72386 5.5 2V8.79289L3.35355 6.64645C3.15829 6.45118 2.84171 6.45118 2.64645 6.64645C2.45118 6.84171 2.45118 7.15829 2.64645 7.35355L5.64645 10.3536C5.84171 10.5488 6.15829 10.5488 6.35355 10.3536L9.35355 7.35355C9.54882 7.15829 9.54882 6.84171 9.35355 6.64645C9.15829 6.45118 8.84171 6.45118 8.64645 6.64645L6.5 8.79289V2Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66665 2.66667C8.66665 2.29848 8.36817 2 7.99998 2C7.63179 2 7.33331 2.29848 7.33331 2.66667V11.7239L4.47138 8.86193C4.21103 8.60158 3.78892 8.60158 3.52858 8.86193C3.26823 9.12228 3.26823 9.54439 3.52858 9.80474L7.52857 13.8047C7.78892 14.0651 8.21103 14.0651 8.47138 13.8047L12.4714 9.80474C12.7317 9.54439 12.7317 9.12228 12.4714 8.86193C12.211 8.60158 11.7889 8.60158 11.5286 8.86193L8.66665 11.7239V2.66667Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.8334 3.33333C10.8334 2.8731 10.4603 2.5 10 2.5C9.53978 2.5 9.16669 2.8731 9.16669 3.33333V14.6548L5.58928 11.0774C5.26384 10.752 4.7362 10.752 4.41076 11.0774C4.08533 11.4028 4.08533 11.9305 4.41076 12.2559L9.41077 17.2559C9.7362 17.5814 10.2638 17.5814 10.5893 17.2559L15.5893 12.2559C15.9147 11.9305 15.9147 11.4028 15.5893 11.0774C15.2638 10.752 14.7362 10.752 14.4108 11.0774L10.8334 14.6548V3.33333Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.49994 2C5.49994 1.72386 5.7238 1.5 5.99994 1.5C6.27609 1.5 6.49994 1.72386 6.49994 2V8.79297L8.64643 6.64648C8.84169 6.45122 9.1582 6.45122 9.35346 6.64648C9.54872 6.84175 9.54872 7.15825 9.35346 7.35352L6.35346 10.3535C6.1582 10.5488 5.84169 10.5488 5.64643 10.3535L2.64643 7.35352L2.61225 7.31543C2.45207 7.11904 2.46337 6.82954 2.64643 6.64648C2.82949 6.46343 3.11899 6.45213 3.31537 6.6123L3.35346 6.64648L5.49994 8.79297V2Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.33328 2.66667C7.33328 2.29848 7.63176 2 7.99995 2C8.36813 2 8.66661 2.29848 8.66661 2.66667V11.724L11.5286 8.86198C11.7889 8.60163 12.2109 8.60163 12.4713 8.86198C12.7316 9.12233 12.7316 9.54434 12.4713 9.80469L8.4713 13.8047C8.21095 14.065 7.78894 14.065 7.52859 13.8047L3.52859 9.80469L3.48302 9.75391C3.26945 9.49206 3.28451 9.10606 3.52859 8.86198C3.77267 8.6179 4.15867 8.60284 4.42052 8.81641L4.4713 8.86198L7.33328 11.724V2.66667Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16661 3.33333C9.16661 2.8731 9.53971 2.5 9.99995 2.5C10.4602 2.5 10.8333 2.8731 10.8333 3.33333V14.6549L14.4108 11.0775C14.7362 10.752 15.2637 10.752 15.5891 11.0775C15.9146 11.4029 15.9146 11.9304 15.5891 12.2559L10.5891 17.2559C10.2637 17.5813 9.73619 17.5813 9.41075 17.2559L4.41075 12.2559L4.35379 12.1924C4.08683 11.8651 4.10566 11.3826 4.41075 11.0775C4.71585 10.7724 5.19835 10.7535 5.52566 11.0205L5.58914 11.0775L9.16661 14.6549V3.33333Z" fill="currentColor" />
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

export const IconArrowNarrowDown: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"arrow-narrow-down"} {...props} />
);
