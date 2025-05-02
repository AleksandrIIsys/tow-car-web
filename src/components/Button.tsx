import React from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`bg-primary px-8 py-4 rounded-md text-xl  max-w-max ${props.className}`} type="button">{props.children}</button>
  );
};

export default Button;
