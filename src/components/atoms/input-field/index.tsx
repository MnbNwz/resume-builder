import { FC, useState } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { WorkExperienceFormData } from "../../../utils/types/formTypes";
import { FaCalendarAlt } from "react-icons/fa";

interface InputFieldProps {
  label: string;
  register: UseFormRegister<WorkExperienceFormData>;
  name: keyof WorkExperienceFormData;
  error?: FieldError;
  type?: string;
  important?: boolean;
  placeholder: string;
  dateRequired?: boolean;
  disabled?: boolean;
  multiple?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  register,
  name,
  error,
  type = "text",
  important,
  placeholder,
  dateRequired = false,
  disabled = false,
  multiple = false,
}) => {
  // const [showCalendar, setShowCalendar] = useState(false);

  // const handleIconClick = () => {
  //   setShowCalendar((prev) => !prev);
  // };

  return (
    <div className="flex-1 relative">
      <label className="block text-sm font-medium text-gray-700 mt-1 mb-1">
        {label} {important && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative">
        {multiple ? (
          <textarea
            rows={multiple ? 4 : 1}
            disabled={disabled}
            {...register(name)}
            placeholder={placeholder}
            className="border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150"
          />
        ) : (
          <input
            disabled={disabled}
            {...register(name)}
            placeholder={placeholder}
            type={dateRequired ? "date" : type}
            className="border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150"
          />
        )}
        {dateRequired && (
          <FaCalendarAlt
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            // onClick={handleIconClick}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};
