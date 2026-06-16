import cn from 'classnames';
import { FC, ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
  className?: string;
}

/**
 * Responsive grid wrapper component following design system specs 
 * See https://www.figma.com/design/7lJPsq1DMhXcvhvG4d0OGm/Web-Design-System?node-id=3284-4690
 * 
 * - 4 columns on mobile, 12 columns on desktop (breakpoint `md`)
 * - Handles grid gap and maximum container width
 */
const Grid: FC<GridProps> = ({ children, className = '' }) => {
  return (
    <div
      className={cn(
        'mx-auto',
        'w-full',
        'md:w-4xl',
        'grid',
        'grid-cols-4',
        'md:grid-cols-12',
        'px-md',
        '2xl:px-0',
        'gap-x-grid-gutter',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
