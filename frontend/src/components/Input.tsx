import { ChangeEvent } from "react";

type props = {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, placeholder, type, onChange }: props) => {
  return (
    <div className="flex flex-col ">
      <label className="text-white  mb-2">{label}</label>
      <input
        onChange={onChange}
        type={type}
        placeholder={`${placeholder}`}
        className="p-2 outline-none transition-all  placeholder-gray-500 border-[1px] border-white/20 rounded-sm focus:ring-blue-400 focus:border-blue-400 bg-black/50"
      />
    </div>
  );
};
