import {
  PersonalDetails,
  ProfessionalSummary,
  EmploymentHistory,
  Education,
  SocialLinks,
  Skills,
  Internship,
} from "./components";
import Template1 from "./components/Templates/Template_1";
import Template2 from "./components/Templates/Template_2";
import Template3 from "./components/Templates/Template_1";

const App = () => {
  const currentTemplate = "Template2";

  const templates = {
    Template1: <Template1 />,
    Template2: <Template2 />,
    Template3: <Template3 />,
  };
  return (
    <div className="relative">
      <div className="flex justify-between items-start">
        <div className="w-full bg-white px-5 py-10 lg:w-1/2">
          <PersonalDetails />
          <ProfessionalSummary />
          <EmploymentHistory />
          <Education />
          <SocialLinks />
          <Skills />
          <Internship />
        </div>
        <div className="hidden w-full fixed right-0 lg:w-1/2 h-[100vh] py-5  px-2 lg:px-20 lg:flex bg-gray-500">
          <div className="bg-white rounded min-h-[90vh] w-[100%] flex flex-col gap-4 py-10 px-5">
            {/*  */}
            {templates[currentTemplate]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
