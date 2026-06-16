import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const ArrowIconSvg = () => {
  return (
    <svg className="icon-brand" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.3335 8H12.6668" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

const TertiaryButtonArrow = () => {
  return (
    <motion.div
      className="relative overflow-hidden ml-3xs w-2 h-2">
      <motion.div className="flex items-center absolute"
        variants={{
          rest: { x: -16 },
          hover: { x: 0 },
        }}
        transition={{
          duration: 0.3,
          ease: [0.5, 0.01, 0.44, 0.99],
        }}
      >
        <ArrowIconSvg />
        <ArrowIconSvg />
      </motion.div>
    </motion.div>
  );
};

type TertiaryButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  | 'onAnimationStart'
  | 'onAnimationEnd'
  | 'onAnimationIteration'
  | 'onDragStart'
  | 'onDrag'
  | 'onDragEnd'
>;

const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        initial="rest"
        whileHover="hover"
        className={className}
        {...props}
      >
        {children}
        <TertiaryButtonArrow />
      </motion.button>
    );
  }
);

TertiaryButton.displayName = 'TertiaryButton';

export { TertiaryButton, TertiaryButtonArrow };
