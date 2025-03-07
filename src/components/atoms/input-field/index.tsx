import { FC } from "react";
import {
  FieldError,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import {
  ProfessionalSummaryFormData,
  WorkExperienceFormData,
} from "../../../utils/types/formTypes";
import { FaCalendarAlt } from "react-icons/fa";

type RegisterType =
  | UseFormRegister<WorkExperienceFormData>
  | UseFormRegister<ProfessionalSummaryFormData>;

type NameType =
  | keyof WorkExperienceFormData
  | keyof ProfessionalSummaryFormData;

interface InputFieldProps {
  label: string;
  register: RegisterType;
  name: NameType;
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
  const registerField = register(name as any);

  return (
    <div className="flex-1 relative">
      <label className="block text-sm font-medium text-gray-700 mt-1 mb-1">
        {label} {important && <span className="text-red-500"> *</span>}
      </label>
      <div className="relative">
        {multiple ? (
          <textarea
            rows={4}
            {...registerField}
            placeholder={placeholder}
            className="border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150"
          />
        ) : (
          <input
            disabled={disabled}
            {...registerField}
            placeholder={placeholder}
            type={dateRequired ? "date" : type}
            className="border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150"
          />
        )}
        {dateRequired && (
          <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};
