import React from "react";

const Button = ({ children }) => {
  return (
    <div className="bg-orange-600 text-white px-5 py-2 rounded-md w-fit flex items-center justify-between gap-2">
      {children}
    </div>
  );
};

export default Button;
