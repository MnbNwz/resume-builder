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
      placeholder={"Start Date"}
      dateRequired={true}
    />
    <InputField
      important={true}
      label="End Date"
      name="endDate"
      register={register}
      error={errors.endDate}
      placeholder={"End Date"}
      dateRequired={true}
    />

    <div className="flex items-center col-span-2">
      <input
        type="checkbox"
        id="endDate"
        className="mr-2 bg-white border-black" // White background and black border for checkbox
        {...register("endDate")} // Registers checkbox in react-hook-form
      />
      <label htmlFor="endDate" className="text-black">
        I currently work here
      </label>
    </div>
  </div>
);
