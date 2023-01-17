import React from 'react';

const Notification = ({ message }) => (
  <>
    {message && <h2>{message}</h2>}
  </>
);

export default Notification;
