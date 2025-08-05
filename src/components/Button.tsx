import React from "react";

import type { ButtonProperties } from "../types/inputType";

interface props {
  buttonProp: ButtonProperties;
}

export const Button: React.FC<props> = ({ buttonProp }) => {
  return (
    <button
      className="bg-blue-700 text-white px-3 py-1 rounded-2xl mt-3 cursor-pointer"
      onClick={buttonProp.onClick}
      type={buttonProp.type}
    >
      {buttonProp.label}
    </button>
  );
};
