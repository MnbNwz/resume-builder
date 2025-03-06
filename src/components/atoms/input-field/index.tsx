import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { WorkExperienceFormData } from "../../../utils/types/formTypes";

interface InputFieldProps {
  label: string;
  register: UseFormRegister<WorkExperienceFormData>;
  name: keyof WorkExperienceFormData;
  error?: FieldError;
  type?: string;
  important?: boolean;
}

export const InputField: FC<InputFieldProps> = ({
  label,
  register,
  name,
  error,
  type = "text",
  important,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      {label} {important && <span className="text-red-500"> *</span>}
    </label>
    <input {...register(name)} type={type} className="border p-2 w-full" />
    {error && <p className="text-red-500 text-xs">{error.message}</p>}
  </div>
);
