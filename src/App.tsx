import "./App.css";
import {
  PersonalInformation,
  ProfessionalSummary,
  WorkExperience,
} from "./components/pages/index";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden space-y-4 p-4">
      <ProfessionalSummary />
      <PersonalInformation />
      <WorkExperience />
    </div>
  );
}

export default App;
