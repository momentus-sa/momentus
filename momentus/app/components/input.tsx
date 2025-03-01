"use client";

import React from "react";

interface CustomInputProps {
  label: string;
  type?: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, type = "text", name, value, onChange }) => {
  return (
    <div className="flex flex-col w-full max-w-md p-4">
      <label htmlFor={name} className="text-lg text-black mb-1 text-left">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-b-2 border-[#0D3D52] bg-transparent outline-none text-black text-lg px-1 pb-1"
      />
    </div>
  );
};

export default CustomInput;
