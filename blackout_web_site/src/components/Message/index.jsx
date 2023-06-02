import React from 'react';
import './style.css';

export default function Message({message,sender}) {

    const className = `message ${sender}`;

  return (
    <p className={className}>{message}</p>
  )
}
