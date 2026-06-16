import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3536 2.89645C10.5488 3.09171 10.5488 3.40829 10.3536 3.60355L4.85355 9.10355C4.65829 9.29882 4.34171 9.29882 4.14645 9.10355L1.64645 6.60355C1.45118 6.40829 1.45118 6.09171 1.64645 5.89645C1.84171 5.70118 2.15829 5.70118 2.35355 5.89645L4.5 8.04289L9.64645 2.89645C9.84171 2.70118 10.1583 2.70118 10.3536 2.89645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.8047 3.86225C14.0651 4.1226 14.0651 4.54471 13.8047 4.80506L6.4714 12.1384C6.21106 12.3987 5.78894 12.3987 5.5286 12.1384L2.19526 8.80506C1.93491 8.54471 1.93491 8.1226 2.19526 7.86225C2.45561 7.6019 2.87772 7.6019 3.13807 7.86225L6 10.7242L12.8619 3.86225C13.1223 3.6019 13.5444 3.6019 13.8047 3.86225Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.2559 4.82709C17.5814 5.15252 17.5814 5.68016 17.2559 6.0056L8.08926 15.1723C7.76382 15.4977 7.23618 15.4977 6.91074 15.1723L2.74408 11.0056C2.41864 10.6802 2.41864 10.1525 2.74408 9.82709C3.06951 9.50165 3.59715 9.50165 3.92259 9.82709L7.5 13.4045L16.0774 4.82709C16.4028 4.50165 16.9305 4.50165 17.2559 4.82709Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.64637 2.89645C9.84163 2.70118 10.1581 2.70118 10.3534 2.89645C10.5487 3.09171 10.5487 3.40822 10.3534 3.60348L4.8534 9.10348C4.65814 9.29874 4.34163 9.29874 4.14637 9.10348L1.64637 6.60348L1.61219 6.56539C1.45201 6.369 1.46331 6.0795 1.64637 5.89645C1.82943 5.71339 2.11893 5.70209 2.31531 5.86227L2.3534 5.89645L4.49988 8.04293L9.64637 2.89645Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8618 3.86225C13.1222 3.6019 13.5442 3.6019 13.8045 3.86225C14.0649 4.1226 14.0649 4.54461 13.8045 4.80496L6.4712 12.1383C6.21085 12.3986 5.78884 12.3986 5.52849 12.1383L2.19516 8.80496L2.14958 8.75418C1.93602 8.49233 1.95108 8.10633 2.19516 7.86225C2.43923 7.61818 2.82523 7.60311 3.08708 7.81668L3.13786 7.86225L5.99984 10.7242L12.8618 3.86225Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.0775 4.82709C16.403 4.50165 16.9305 4.50165 17.2559 4.82709C17.5813 5.15252 17.5813 5.68003 17.2559 6.00547L8.08924 15.1721C7.7638 15.4976 7.23629 15.4976 6.91086 15.1721L2.74419 11.0055L2.68722 10.942C2.42026 10.6147 2.43909 10.1322 2.74419 9.82709C3.04929 9.52199 3.53179 9.50316 3.8591 9.77012L3.92257 9.82709L7.50005 13.4046L16.0775 4.82709Z" fill="currentColor" />
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

export const IconCheck: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"check"} {...props} />
);
