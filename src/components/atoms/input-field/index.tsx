import { FC } from "react"; // Importing FC for functional component type
import {
  FieldError, // Importing FieldError for error handling
  UseFormRegister, // Importing UseFormRegister for form registration (from react-hook-form)
} from "react-hook-form"; // Importing react-hook-form
import {
  PersonalInformationFormData, // Type for Personal Information form data
  ProfessionalSummaryFormData, // Type for Professional Summary form data
  WorkExperienceFormData, // Type for Work Experience form data
} from "../../../utils/types/formTypes"; // Importing form data types
import { FaCalendarAlt } from "react-icons/fa"; // Importing calendar icon for date inputs
import { CountryFlagDropdown } from "../../organisms"; // Importing CountryFlagDropdown component

// Type definition for the register prop, can handle multiple form data types
type RegisterType =
  | UseFormRegister<WorkExperienceFormData>
  | UseFormRegister<PersonalInformationFormData>
  | UseFormRegister<ProfessionalSummaryFormData>;

// Type definition for the field name, can handle keys from different form data types
type NameType =
  | keyof WorkExperienceFormData
  | keyof ProfessionalSummaryFormData
  | keyof PersonalInformationFormData;

// Interface for InputField component props
interface InputFieldProps {
  label: string; // Label text for the input field
  register: RegisterType; // Register function from react-hook-form
  name: NameType; // Field name from form data
  error?: FieldError; // Error message for the field
  type?: string; // Input field type, default is "text"
  important?: boolean; // Flag to indicate if the field is required (adds a red asterisk)
  placeholder: string; // Placeholder text for the input field
  dateRequired?: boolean; // Flag to indicate if the field requires a date input
  disabled?: boolean; // Flag to disable the field
  multiple?: boolean; // Flag for whether the field is a textarea (supports multiple lines)
  countryFlag?: boolean; // Flag to display the country flag dropdown (for phone number)
}

// InputField functional component
export const InputField: FC<InputFieldProps> = ({
  label,
  register,
  name,
  error,
  type = "text", // Default type is "text"
  important,
  placeholder,
  dateRequired = false, // Default to false for date requirement
  disabled = false, // Default to false for disabled state
  multiple = false, // Default to false for single-line input
  countryFlag = false, // Default to false for no country flag dropdown
}) => {
  const registerField = register(name as any); // Register the field for form validation

  return (
    <div className="flex-1 relative">
      {/* Label for the input field */}
      <label className="block text-sm font-medium text-gray-700 mt-1 mb-1">
        {label} {important && <span className="text-red-500"> *</span>}{" "}
        {/* Show asterisk if important */}
      </label>
      <div className="relative">
        {/* Conditional rendering for textarea if multiple lines are needed */}
        {multiple ? (
          <textarea
            rows={4}
            {...registerField} // Register the textarea field
            placeholder={placeholder}
            className="border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150"
          />
        ) : (
          <div className="flex gap-2">
            {/* Conditional rendering for country flag dropdown */}
            {countryFlag && <CountryFlagDropdown />}
            <input
              disabled={disabled} // Disable input if disabled is true
              {...registerField} // Register the input field
              placeholder={placeholder}
              type={dateRequired ? "date" : type} // Change input type if dateRequired is true
              className={`border border-gray-300 p-2 w-full text-black text-sm placeholder-gray-400 pr-10 rounded-md focus:border-black focus:outline-none focus:ring-1 focus:ring-gray-400 transition duration-150 ${
                disabled ? "!bg-gray-300 opacity-50 cursor-not-allowed" : "" // Style for disabled state
              }`}
            />
          </div>
        )}
        {/* Show calendar icon if dateRequired is true */}
        {dateRequired && (
          <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
        )}
      </div>
      {/* Show error message if there's an error */}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};
