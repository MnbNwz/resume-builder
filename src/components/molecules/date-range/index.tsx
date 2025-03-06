import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputField } from "../../atoms";
import { WorkExperienceFormData } from "../../../utils/types/formTypes";

interface DateRangeProps {
  register: UseFormRegister<WorkExperienceFormData>;
  errors: FieldErrors<WorkExperienceFormData>;
}

export const DateRange: FC<DateRangeProps> = ({ register, errors }) => (
  <div className="grid grid-cols-2 gap-4">
    <InputField
      important={true}
      label="Start Date"
      name="startDate"
      register={register}
      error={errors.startDate}
    />
    <InputField
      important={true}
      label="End Date"
      name="endDate"
      register={register}
      error={errors.endDate}
    />
  </div>
);
