import React from 'react';
import { TitleH3 } from './feedback.styled';


const Notification = ({ message }) => (
  <>
    {message && <TitleH3>{message}</TitleH3>}
  </>
);

export default Notification;
