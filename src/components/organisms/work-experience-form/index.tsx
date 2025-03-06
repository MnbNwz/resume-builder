import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputField, Button } from "../../atoms/index";
import { DateRange } from "../../molecules";
import {
  WorkExperienceFormData,
  workExperienceSchema,
} from "../../../utils/types/formTypes";

export const WorkExperienceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkExperienceFormData>({
    resolver: zodResolver(workExperienceSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <InputField
        important={true}
        label="Company Name"
        name="companyName"
        register={register}
        error={errors.companyName}
      />
      <InputField
        important={true}
        label="Job Title"
        name="jobTitle"
        register={register}
        error={errors.jobTitle}
      />
      <DateRange register={register} errors={errors} />
      <InputField
        important={false}
        label="Location"
        name="location"
        register={register}
        error={errors.location}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
