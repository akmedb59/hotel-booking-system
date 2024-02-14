import React from "react";

const Button = ({ children }) => {
  return (
    <div className="bg-orange-600 text-white px-5 py-2 rounded-md w-fit">
      {children}
    </div>
  );
};

export default Button;
