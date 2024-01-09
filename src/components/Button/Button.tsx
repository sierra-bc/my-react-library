import React, { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type: "button" | "submit";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
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
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
