import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.87559 1.5H10.409L7.05896 5.31231L11 10.5H7.9142L5.49729 7.35369L2.73179 10.5H1.19747L4.78065 6.42231L1 1.5H4.16414L6.34882 4.37585L8.87559 1.5ZM8.33741 9.58615H9.18709L3.70245 2.36585H2.79066L8.33741 9.58615Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8342 2H13.8787L9.41199 7.08308L14.6667 14H10.5523L7.32976 9.80492L3.64243 14H1.59667L6.37424 8.56308L1.33337 2H5.55223L8.46513 5.83446L11.8342 2ZM11.1166 12.7815H12.2495L4.93664 3.15446H3.72093L11.1166 12.7815Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7926 2.5H17.3483L11.7649 8.85385L18.3333 17.5H13.1903L9.16211 12.2562L4.55295 17.5H1.99574L7.96771 10.7038L1.66663 2.5H6.94019L10.5813 7.29308L14.7926 2.5ZM13.8956 15.9769H15.3118L6.17071 3.94308H4.65107L13.8956 15.9769Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.87559 1.5H10.409L7.05896 5.31231L11 10.5H7.9142L5.49729 7.35369L2.73179 10.5H1.19747L4.78065 6.42231L1 1.5H4.16414L6.34882 4.37585L8.87559 1.5ZM8.33741 9.58615H9.18709L3.70245 2.36585H2.79066L8.33741 9.58615Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.8342 2H13.8787L9.41199 7.08308L14.6667 14H10.5523L7.32976 9.80492L3.64243 14H1.59667L6.37424 8.56308L1.33337 2H5.55223L8.46513 5.83446L11.8342 2ZM11.1166 12.7815H12.2495L4.93664 3.15446H3.72093L11.1166 12.7815Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.7926 2.5H17.3483L11.7649 8.85385L18.3333 17.5H13.1903L9.16211 12.2562L4.55295 17.5H1.99574L7.96771 10.7038L1.66663 2.5H6.94019L10.5813 7.29308L14.7926 2.5ZM13.8956 15.9769H15.3118L6.17071 3.94308H4.65107L13.8956 15.9769Z" fill="currentColor" />
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

export const IconTwitterX: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"twitter-x"} {...props} />
);
