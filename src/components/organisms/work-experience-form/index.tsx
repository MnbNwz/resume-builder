import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "../../atoms/index";
import { DateRange } from "../../molecules";
import {
  WorkExperienceFormData,
  workExperienceSchema,
} from "../../../utils/types/formTypes";
import APP_CONSTANTS from "../../../constants/app-constants";
import { FaPlus } from "react-icons/fa";

const defaultValues = {
  companyName: "",
  jobTitle: "",
  startDate: "mm/dd/yyyy",
  endDate: "mm/dd/yyyy",
  location: "",
};
// Simulate fetching data from an API

export const WorkExperienceForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkExperienceFormData>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues,
  });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //
  //       const response = await fetch("/api/work-experience");
  //       const data = await response.json();

  //       // Map API data to form fields
  //       reset({
  //         companyName: data.companyName || "",
  //         jobTitle: data.jobTitle || "",
  //         startDate: data.startDate || "",
  //         endDate: data.endDate || "",
  //         location: data.location || "",
  //       });
  //     } catch (error) {
  //       console.error("Failed to fetch data", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [reset]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-4 rounded-md border border-gray-300"
    >
      <InputField
        important={true}
        label="Company Name"
        name="companyName"
        register={register}
        error={errors.companyName}
        placeholder={"e.g., Acme Corporation"}
      />
      <InputField
        important={true}
        label="Job Title"
        name="jobTitle"
        register={register}
        error={errors.jobTitle}
        placeholder={"e.g., Senior Software Engineer"}
      />
      <DateRange register={register} errors={errors} />
      <InputField
        important={false}
        label="Location"
        name="location"
        register={register}
        error={errors.location}
        placeholder={"e.g., San Francisco CA or remote"}
      />
      <Button
        styleDate={
          "!bg-white !text-black rounded-md py-2 px-4 !border !border-gray-300"
        }
        type="submit"
      >
        <span className="flex items-center justify-center gap-2">
          <FaPlus size={15} />
          {APP_CONSTANTS.addWorkExperience}
        </span>
      </Button>
    </form>
  );
};
