import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, InputField } from "../../atoms";
import { APP_CONSTANTS } from "../../../constants/app-constants";
import { FaPlus } from "react-icons/fa";
import {
  PersonalInformationFormData,
  PersonalInformationSchema,
} from "../../../utils/types/formTypes";

// Default values for the form fields
const defaultValues = {
  fullName: "",
  email: "",
  headline: "",
  location: "",
  linkedIn: "",
  website: "",
};

export const PersonalInformationForm = () => {
  const {
    register, // Register form fields
    handleSubmit, // Handles form submission
    formState: { errors }, // Form validation errors
  } = useForm<PersonalInformationFormData>({
    resolver: zodResolver(PersonalInformationSchema), // Schema validation
    defaultValues,
  });

  const onSubmit = (data: any) => console.log(data); // Form submit handler

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Submit handler
      className="space-y-4 p-4 rounded-md border border-gray-300"
    >
      {/* Grid for Full Name and Email fields */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          important={true} // Mark field as important
          label="Full Name"
          name="fullName"
          register={register}
          error={errors.fullName} // Display error for Full Name field
          placeholder={"eg,. John"}
        />
        <InputField
          important={true} // Mark field as important
          label="Email"
          name="email"
          register={register}
          error={errors.email} // Display error for Email field
          placeholder={"abc@domain.com"}
        />
      </div>

      {/* Input field for Headline */}
      <InputField
        label="Headline"
        name="headline"
        register={register}
        error={errors.headline} // Display error for Headline field
        placeholder={"eg,. some famous headline about you"}
      />

      {/* Input field for Location */}
      <InputField
        label="Location"
        name="location"
        register={register}
        error={errors.location} // Display error for Location field
        placeholder="e.g., San Francisco CA or LA"
      />

      {/* Input field for Phone Number with country flag */}
      <InputField
        countryFlag={true} // Display country flag for phone number
        label="Phone Number"
        name="number"
        register={register}
        error={errors.number} // Display error for Phone Number field
        placeholder="000 000 0000"
      />

      {/* Grid for LinkedIn and Website fields */}
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="LinkedIn"
          name="linkedIn"
          register={register}
          error={errors.linkedIn} // Display error for LinkedIn field
          placeholder={"www.linkedin.com"}
        />
        <InputField
          label="Website"
          name="website"
          register={register}
          error={errors.website} // Display error for Website field
          placeholder={"www.google.com"}
        />
      </div>

      {/* Submit Button */}
      <Button
        styleDate={
          "!bg-white !text-black rounded-md py-2 px-4 !border !border-gray-300"
        }
        type="submit"
      >
        <span className="flex items-center justify-center gap-2">
          <FaPlus size={15} />
          {APP_CONSTANTS.submit}
        </span>
      </Button>
    </form>
  );
};
