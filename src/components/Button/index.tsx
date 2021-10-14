import React from 'react';

export type buttonProps = {
  onClick?: () => void;
};

export const Button = ({ onClick }: buttonProps) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click here!
      </button>
    </div>
  );
};
