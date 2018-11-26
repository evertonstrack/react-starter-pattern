import React from 'react';

export const Button = (props: any) => {

  const { label, type } = props;

  return (
    <button 
      className="button"
      type={type || 'button'}
    >
      {label}
    </button>
  );
}