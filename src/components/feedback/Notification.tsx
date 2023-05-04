import React from 'react';
import { TitleH3 } from './feedback.styled';

interface NotificationProps {
  message?: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => (
  <>
    {message && <TitleH3>{message}</TitleH3>}
  </>
);

export default Notification;