import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        borderRadius: 8,
        backgroundColor: "skyblue",
        fontSize: 18,
        border: "none",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
