import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: 8,
        backgroundColor: "skyblue",
        fontSize: 18,
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
