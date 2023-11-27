import {
  PersonalDetails,
  EmploymentHistory,
  Education,
  SocialLinks,
  Skills,
  Internship,
} from "./components";
import Template1 from "./components/Templates/Template_1";
import Template2 from "./components/Templates/Template_2";
import Template3 from "./components/Templates/Template_1";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const App = () => {
  const [view, setView] = useState();
  const currentTemplate = "Template1";

  const templates = {
    Template1: <Template1 />,
    Template2: <Template2 />,
    Template3: <Template3 />,
  };

  const switch_view = () => (!view ? setView(true) : setView(false));

  return (
    <div className="relative">
      <div className="flex justify-between items-start">
        <div
          className={
            !view ? "relative w-full bg-white px-5 py-10 lg:w-1/2" : "hidden"
          }
        >
          <PersonalDetails />
          <EmploymentHistory />
          <Education />
          <SocialLinks />
          <Skills />
          <Internship />
        </div>
        <div
          className={
            view || view == undefined
              ? "w-full fixed right-0 lg:w-1/2 h-[100vh] py-5  px-2 lg:px-20 lg:flex bg-gray-500"
              : "hidden"
          }
        >
          <div className="bg-white text-gray-900 rounded min-h-[90vh] w-[100%] overflow-hidden flex flex-col gap-4 py-10 px-5">
            {/*  */}
            {templates[currentTemplate]}
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-28 right-10 cursor-pointer rounded-full h-10 w-10 flex items-center justify-center bg-blue-700 lg:hidden"
        onClick={switch_view}
      >
        <PrinterIcon className="w-5 " />
      </div>
    </div>
  );
};

export default App;
