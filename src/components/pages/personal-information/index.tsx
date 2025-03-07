import { APP_CONSTANTS } from "../../../constants/app-constants";
import { PersonalInformationForm } from "../../organisms";
import { FormTemplate } from "../../templates";

export const PersonalInformation = () => {
  return (
    <FormTemplate title={APP_CONSTANTS.personalInformation}>
      <PersonalInformationForm />
    </FormTemplate>
  );
};
