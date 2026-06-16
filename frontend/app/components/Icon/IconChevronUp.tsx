import { FC } from "react";
import Icon from ".";
import { IconElementProps, createIconVariantMap } from "./Icon.types";

export const Filled12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 4.14645C5.84171 3.95118 6.15829 3.95118 6.35355 4.14645L9.35355 7.14645C9.54882 7.34171 9.54882 7.65829 9.35355 7.85355C9.15829 8.04882 8.84171 8.04882 8.64645 7.85355L6 5.20711L3.35355 7.85355C3.15829 8.04882 2.84171 8.04882 2.64645 7.85355C2.45118 7.65829 2.45118 7.34171 2.64645 7.14645L5.64645 4.14645Z" fill="currentColor" />
    </svg>
  );
};

export const Filled16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.52864 5.52827C7.78899 5.26792 8.2111 5.26792 8.47144 5.52827L12.4714 9.52827C12.7318 9.78862 12.7318 10.2107 12.4714 10.4711C12.2111 10.7314 11.789 10.7314 11.5286 10.4711L8.00004 6.94248L4.47145 10.4711C4.2111 10.7314 3.78899 10.7314 3.52864 10.4711C3.26829 10.2107 3.26829 9.78862 3.52864 9.52827L7.52864 5.52827Z" fill="currentColor" />
    </svg>
  );
};

export const Filled20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.4107 6.91107C9.73614 6.58563 10.2638 6.58563 10.5892 6.91107L15.5892 11.9111C15.9147 12.2365 15.9147 12.7641 15.5892 13.0896C15.2638 13.415 14.7361 13.415 14.4107 13.0896L9.99996 8.67884L5.58922 13.0896C5.26378 13.415 4.73614 13.415 4.4107 13.0896C4.08527 12.7641 4.08527 12.2365 4.4107 11.9111L9.4107 6.91107Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined12 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.68465 4.11219C5.88104 3.95201 6.17054 3.96331 6.3536 4.14637L9.3536 7.14637L9.38778 7.18445C9.54796 7.38084 9.53666 7.67034 9.3536 7.8534C9.17054 8.03646 8.88104 8.04775 8.68465 7.88758L8.64657 7.8534L6.00008 5.20691L3.3536 7.8534C3.15834 8.04866 2.84183 8.04866 2.64657 7.8534C2.45131 7.65814 2.45131 7.34163 2.64657 7.14637L5.64657 4.14637L5.68465 4.11219Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined16 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.57954 5.48259C7.84139 5.26902 8.22739 5.28409 8.47147 5.52816L12.4715 9.52816L12.517 9.57895C12.7306 9.84079 12.7155 10.2268 12.4715 10.4709C12.2274 10.7149 11.8414 10.73 11.5795 10.5164L11.5288 10.4709L8.00011 6.94223L4.47147 10.4709C4.21112 10.7312 3.78911 10.7312 3.52876 10.4709C3.26841 10.2105 3.26841 9.78851 3.52876 9.52816L7.52876 5.52816L7.57954 5.48259Z" fill="currentColor" />
    </svg>
  );
};

export const Outlined20 = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.4743 6.85397C9.80161 6.58701 10.2841 6.60584 10.5892 6.91094L15.5892 11.9109L15.6462 11.9744C15.9131 12.3017 15.8943 12.7842 15.5892 13.0893C15.2841 13.3944 14.8016 13.4132 14.4743 13.1463L14.4108 13.0893L10 8.67852L5.58921 13.0893C5.26377 13.4148 4.73626 13.4148 4.41083 13.0893C4.08539 12.7639 4.08539 12.2364 4.41083 11.9109L9.41083 6.91094L9.4743 6.85397Z" fill="currentColor" />
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

export const IconChevronUp: FC<IconElementProps & { className?: string }> = (props) => (
  <Icon name={"chevron-up"} {...props} />
);
