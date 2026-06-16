'use client';

import { ButtonBaseClasses } from "@/app/components/Button";
import cn from "classnames";
import { motion } from "framer-motion";
import Icon from "../Icon";
import { IconName } from "../Icon/Icon.registry";

export type TabButtonWithProgressBarProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
  iconName: IconName;
}

/* 
 * Variants for the animated tab bar that shows the active feature.
 * When active, the active bar color fills in the width of the tab.
 */

const activeBarVariants = {
  active: { width: '100%', opacity: 1, transition: { duration: 0.2 } },
  inactive: { opacity: 0, transition: { duration: 0.1 } },
};

const TabButtonWithProgressBar = ({
  title,
  iconName,
  isActive,
  onClick,
}: TabButtonWithProgressBarProps) => {
  return (
    <div
      className="relative flex flex-col items-center"
    >
      <button
        onClick={onClick}
        className={cn(ButtonBaseClasses, "flex items-center justify-center gap-2xs py-xs px-s hover:button-surface-tab-hover hover:button-text-tab-active",
          isActive ? "button-text-tab-active" : "button-text-tab"
        )}
      >
        {iconName && (
          <Icon name={iconName} size={20} type="outlined" />
        )}
        {title}
      </button>
      <div
        className={cn('surface-l1 h-[6px] mt-xs relative w-full rounded-10 overflow-hidden'
        )}
      >
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          variants={activeBarVariants}
          animate={isActive ? "active" : "inactive"}
          className={cn("surface-l1-active absolute inset-0 h-[6px] rounded-10 overflow-hidden")}
        />
      </div>
    </div>

  )
}

export default TabButtonWithProgressBar;
