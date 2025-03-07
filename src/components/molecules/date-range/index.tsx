import { FC } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { InputField } from "../../atoms";
import { WorkExperienceFormData } from "../../../utils/types/formTypes";
import { APP_CONSTANTS } from "../../../constants/app-constants";
import { CheckboxWithLabel } from "../checkbox-label";

// Interface for the props passed to DateRange component
interface DateRangeProps {
  register: UseFormRegister<WorkExperienceFormData>; // Register function for form fields
  errors: FieldErrors<WorkExperienceFormData>; // Errors for form validation
  isEndDateDisabled: boolean | undefined; // Condition to disable End Date field
}

// DateRange component for handling Start and End dates in a form
export const DateRange: FC<DateRangeProps> = ({
  register, // Register function passed from parent component
  errors, // Errors object for validation feedback
  isEndDateDisabled, // Whether the End Date field should be disabled
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Start Date Input Field */}
      <InputField
        important={true} // Mark field as important
        label="Start Date"
        name="startDate"
        register={register}
        error={errors.startDate} // Display error for Start Date field
        placeholder={"Start Date"}
        dateRequired={true} // Ensure the field is required
      />

      {/* End Date Input Field */}
      <InputField
        important={true} // Mark field as important
        label="End Date"
        name="endDate"
        register={register}
        error={errors.endDate} // Display error for End Date field
        placeholder={"End Date"}
        dateRequired={true} // Ensure the field is required
        disabled={isEndDateDisabled} // Disable field if condition is true
      />

      {/* Checkbox for indicating current employment */}
      <div className="flex items-center col-span-2">
        <CheckboxWithLabel
          id="disabledEndDate" // ID for the checkbox
          label={APP_CONSTANTS.iCurrentlyWorkHere} // Label text for the checkbox
          register={register} // Register the checkbox field
        />
      </div>
    </div>
  );
};
