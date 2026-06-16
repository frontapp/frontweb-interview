import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Icon from "../Icon";
import { IconName } from "../Icon/Icon.registry";
import { Text } from "../Text";

export type MobileCarouselItemProps = {
  title: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  image?: React.ReactNode;
  description?: string | React.ReactNode;
  iconName: IconName;
}

const MobileCarouselItem: FC<MobileCarouselItemProps> = ({ title, description, isActive, onClick, image, iconName }) => {
  return (
    <div className={`surface-l1 p-xl w-full cursor-pointer rounded-10`}
      onClick={onClick}>
      <motion.div
        className={`flex w-full justify-between`}
        animate={isActive ? { paddingBottom: '24px' } : { paddingBottom: '0px' }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      >
        <div className="flex">
          <Icon name={iconName} size={20} type="outlined" className="my-auto mr-2xs text-primary" />
          <Text type="p2-medium" className="text-primary my-auto">{title}</Text>
        </div>
        <div className="my-auto">
          {/* Animated plus sign - vertical line is rotate 90deg when active to create minus sign */}
          <svg className="icon-brand" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path d="M16 10.6666V21.3333" stroke="currentColor" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"
              initial={{ rotate: "0" }}
              animate={isActive ? { rotate: "90deg" } : { rotate: "0deg" }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                transformOrigin: 'center',
              }} />
            <path d="M10.667 16H21.3337" stroke="currentColor" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        className={`overflow-hidden `}
        initial={false}
        animate={{ height: isActive ? 'auto' : 0 }}
        transition={{
          duration: 400 / 1000,
          ease: 'easeInOut',
        }}
      >
        <div className={`flex flex-col flex-wrap gap-y-xl justify-center`}>
          {/* Using AnimatePresence to avoid loading the icon when the feature is not active */}
          {image && (
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="flex w-full rounded-10 overflow-hidden"
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                >
                  {image}
                </motion.div>
              )}
            </AnimatePresence>
          )}
          {description && (
            <Text type="p2" className="text-secondary">{description}</Text>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MobileCarouselItem;
