import React from 'react';
import { TitleH2 } from './feedback.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    {title && <TitleH2>{title}</TitleH2>}
    {children}
  </>
);

export default Section; 

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
