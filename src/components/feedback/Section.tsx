import React, { ReactNode } from 'react';
import { TitleH2 } from './feedback.styled';

interface SectionProps {
  title?: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps): JSX.Element => (
  <>
    {title && <TitleH2>{title}</TitleH2>}
    {children}
  </>
);

export default Section;
