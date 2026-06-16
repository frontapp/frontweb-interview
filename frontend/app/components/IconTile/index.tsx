import cn from 'classnames';
import { FC } from "react";
import Icon from '../Icon';
import { IconName } from '../Icon/Icon.registry';

type IconTileProps = {
  iconName: IconName;
  size: 'small' | 'large';
  className?: string;
}

export const IconTile: FC<IconTileProps> = ({ iconName, size, className }) => {
  const spacingClass = size === 'small' ? 'w-4 h-4 p-spacing-8' : 'w-6 h-6 p-spacing-12';
  const iconSize = size === 'small' ? 16 : 20;

  console.log('iconName', iconName);
  return (
    <div className={cn(className, spacingClass, 'bg-citron-500 rounded-full flex items-center justify-center')}>
      <div className="margin-auto">
        <Icon className="text-gray-800" name={iconName} size={iconSize} type="outlined" />
      </div>
    </div>
  );
};
