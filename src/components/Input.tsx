import React from "react";
import type { Input } from "../types/inputType";

interface props {
  input: Input;
}

export const InputFucnction: React.FC<props> = ({ input }) => {
  return (
    <div>
      {input.label && <label className="block">{input.label}</label>};
      <input
        className="border border-amber-400 px-4 py-1 font-bold"
        value={input.value}
        type={input.type}
        name={input.name}
        onChange={input.onChange}
        placeholder={input.placeholder}
      />
      ;
    </div>
  );
};
