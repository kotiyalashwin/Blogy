import { ChangeEvent } from "react";

type props = {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, placeholder, type, onChange }: props) => {
  return (
    <div className="flex flex-col w-full ">
      <label className="text-black  mb-2">{label}</label>
      <input
        onChange={onChange}
        type={type}
        placeholder={`${placeholder}`}
        className="p-2 outline-none   transition-all text-black  placeholder-neutral-400 border border-black/30 rounded-lg focus:ring-blue-400 focus:border-blue-400 "
      />
    </div>
  );
};
