import { APP_CONSTANTS } from "../../../constants/app-constants";
import { ProfessionalSummaryForm } from "../../organisms";
import { FormTemplate } from "../../templates";

export const ProfessionalSummary = () => {
  return (
    <FormTemplate title={APP_CONSTANTS.professionalSummary}>
      <ProfessionalSummaryForm />
    </FormTemplate>
  );
};
