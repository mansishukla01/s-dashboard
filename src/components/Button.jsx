import React from "react";

const Button = ({ label, onClick, className = "btn" , type = "button" }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
