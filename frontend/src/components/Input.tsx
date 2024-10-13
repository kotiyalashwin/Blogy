import { ChangeEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type props = {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ label, placeholder, type, onChange }: props) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-full ">
      <label className="text-teal-700  mb-2">{label}</label>
      <div className="p-2 outline-none flex justify-between w-full   transition-all text-black  placeholder-neutral-400 border  border-emerald-300 rounded-lg focus:ring-teal-500 focus:ring-2 focus:border-transparent ease-in-out">
        <input
          onChange={onChange}
          type={showPassword ? "text" : `${type}`}
          placeholder={`${placeholder}`}
          className="outline-none"
        />{" "}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            // className="absolute inset-y-0 right-0 flex items-center pr-3 mt-6"
          >
            {showPassword ? (
              <Eye className="h-5 w-5 text-gray-400" />
            ) : (
              <EyeOff className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};
