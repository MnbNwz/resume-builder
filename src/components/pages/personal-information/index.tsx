import APP_CONSTANTS from "../../../constants/app-constants";
import {
  PersonalInformationForm,
  ProfessionalSummaryForm,
} from "../../organisms";
import { FormTemplate } from "../../templates";

export const PersonalInformation = () => {
  return (
    <FormTemplate title={APP_CONSTANTS.personalInformation}>
      <ProfessionalSummaryForm />
    </FormTemplate>
  );
};
