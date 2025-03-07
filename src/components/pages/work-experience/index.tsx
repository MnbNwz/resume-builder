import APP_CONSTANTS from "../../../constants/app-constants";
import { WorkExperienceForm } from "../../organisms";
import { FormTemplate } from "../../templates";

export const WorkExperience = () => {
  return (
    <FormTemplate
      title={APP_CONSTANTS.workExperience}
      component={<WorkExperienceForm />}
    />
  );
};
