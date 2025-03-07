import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputField } from "../../atoms";
import { WorkExperienceFormData } from "../../../utils/types/formTypes";
import APP_CONSTANTS from "../../../constants/app-constants";
import { CheckboxWithLabel } from "../checkbox-label";

interface DateRangeProps {
  register: UseFormRegister<WorkExperienceFormData>;
  errors: FieldErrors<WorkExperienceFormData>;
  isEndDateDisabled: boolean | undefined;
}

export const DateRange: FC<DateRangeProps> = ({
  register,
  errors,
  isEndDateDisabled,
}) => {
  return (
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
        disabled={isEndDateDisabled}
      />

      <div className="flex items-center col-span-2">
        <CheckboxWithLabel
          id="disabledEndDate"
          label={APP_CONSTANTS.iCurrentlyWorkHere}
          register={register}
        />
      </div>
    </div>
  );
};
