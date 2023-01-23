import React from 'react';
import { TitleH3 } from './feedback.styled';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <>
    {message && <TitleH3>{message}</TitleH3>}
  </>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};