'use client';

import { IconName } from '@/app/components/Icon/Icon.registry';
import { IconTile } from '@/app/components/IconTile';
import { Text } from '@/app/components/Text';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import { FeatureItem as FeatureItemType } from '@/sanity.types';
import ResolvedLink from '@/app/components/ResolvedLink';

export type FeatureItemProps =  FeatureItemType;

const ArrowIconSvg = () => {
  return (
    <svg className="icon-brand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

const AnimatedArrow = () => {
  return (
    <motion.div
      className="relative overflow-hidden w-3 h-3 my-auto text-primary">
      <motion.div className="flex items-center absolute"
        variants={animatedArrowVariants}
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

const activeBarVariants = {
  rest: { opacity: 0, transition: { duration: 0.1 } },
  hover: { width: '100%', opacity: 1, transition: { duration: 0.4 } },
};

const animatedArrowVariants = {
  rest: { x: -24 },
  hover: { x: 0 },
};

export const FeatureItem: FC<FeatureItemProps> = ({ icon, title, link }) => {
  console.log('link', link);
  console.log('icon', icon);
  return (
    <ResolvedLink link={link}>
      <motion.div
        initial="rest"
        whileHover="hover"
        className="">
        <div className="flex justify-between w-full py-s">
          {/* Icon and title container */}
          <div className="flex gap-s">
            <IconTile iconName={icon?.name} size="small" />
            <Text type="h4" className="text-primary my-auto">{title}</Text>
          </div>
          <AnimatedArrow />
        </div>
        <div
          className='surface-l1 h-[1px] relative w-full rounded-10 overflow-hidden'
        >
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            variants={activeBarVariants}
            className="surface-l1-active absolute inset-0 h-[6px] rounded-10 overflow-hidden"
          />
        </div>
      </motion.div>
    </ResolvedLink>
  )
}
