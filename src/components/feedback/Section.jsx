import React from 'react';
import { TitleH2 } from './feedback.styled';


const Section = ({ title, children }) => (
  <>
    {title && <TitleH2>{title}</TitleH2>}
    {children}
  </>
);

export default Section; 