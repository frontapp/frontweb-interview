import cn from "classnames";
import { FC, useMemo } from "react";
import { Text, TextType } from "../Text";
import { PortableTextBlock } from "next-sanity";
import PortableText from "../PortableText";

export type TextCombinationType = 'd1p1' | 'd2p1' | 'd3p1' | 'h1p1' | 'h2p2' | 'h3p2';

export type TextCombinationProps = {
  type: TextCombinationType;
  align: 'left' | 'center';
  eyebrow?: string;
  title: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  description?: string | PortableTextBlock[];
  className?: string;
}
const getAnchorIdFromTitle = (title: string, wordCount = 3): string => {
  const words = title.trim().split(/\s+/).filter(Boolean).slice(0, wordCount);

  if (words.length === 0) return '';

  return words.join(' ');
};

const TEXT_COMBINATION_VARIANTS = {
  'd1p1': {
    title: 'display1',
    description: 'p1',
  },
  'd2p1': {
    title: 'display2',
    description: 'p1',
  },
  'd3p1': {
    title: 'display3',
    description: 'p1',
  },
  'h1p1': {
    title: 'h1',
    description: 'p1',
  },
  'h2p2': {
    title: 'h2',
    description: 'p2',
  },
  'h3p2': {
    title: 'h3',
    description: 'p2',
  },
} as const satisfies Record<TextCombinationType, { title: TextType; description: TextType }>;

export const TextCombination: FC<TextCombinationProps> = ({ type = 'd1p1', align = 'left', eyebrow, title, headingLevel = 'h2', description, className }) => {
  const { title: titleType, description: descriptionType } = TEXT_COMBINATION_VARIANTS[type];
  const textAlignClass = useMemo(() => align === 'center' ? 'text-center' : 'text-left', [align]);
  const titleId = useMemo(() => getAnchorIdFromTitle(title), [title]);
  // Description text has different max-widths for center and left alignment, per Design System guidelines
  const descriptionClassName = useMemo(() => cn('text-secondary text-pretty', {
    'max-w-dimensions-840 mx-auto': align === 'center',
    'max-w-dimensions-732': align === 'left',
  }), [description]);

  return (
    <div className={cn('space-y-2', className, textAlignClass)}>
      <Text type='micro1' className="text-secondary">{eyebrow}</Text>
      <Text id={titleId} as={headingLevel} type={titleType} className="text-primary text-balance">{title}</Text>
      {typeof description === 'string' ? (
        <Text type={descriptionType} className={descriptionClassName}>{description}</Text>
      ) : (
        <PortableText value={description as PortableTextBlock[]} className={descriptionClassName}/>
      )}
    </div>
  );
};
