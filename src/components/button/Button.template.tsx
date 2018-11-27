import React from 'react';
import { IButton } from './Button.types';

export const Button = (props: IButton) => {

  const { label, type } = props;

  return (
    <button 
      className="button"
      type={type || 'button'}
    >
      {label && label}
    </button>
  );
}