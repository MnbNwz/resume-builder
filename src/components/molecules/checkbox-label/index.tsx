import React from "react";
import { Checkbox } from "../../atoms"; // Importing the Checkbox component

// Define the props interface for the CheckboxWithLabel component
interface CheckboxWithLabelProps {
  id: string; // Unique identifier for the checkbox element
  label: string; // The label text for the checkbox
  className?: string; // Optional custom CSS class for styling
  register?: any; // Optional register function for form handling (from react-hook-form)
}

// CheckboxWithLabel component combines a checkbox input with a label
export const CheckboxWithLabel: React.FC<CheckboxWithLabelProps> = ({
  id, // Checkbox ID
  label, // Checkbox label text
  className = "", // Custom CSS class, defaults to an empty string
  register, // Register function for form validation
}) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Checkbox component */}
      <Checkbox id={id} className={className} register={register} />

      {/* Label associated with the checkbox */}
      <label htmlFor={id} className="text-sm text-black">
        {label}
      </label>
    </div>
  );
};
