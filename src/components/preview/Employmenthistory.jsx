import { BriefcaseIcon } from "@heroicons/react/24/solid";
import PreviewLayout from "../../layouts/PreviewLayout";

const Employmenthistory = () => {
  return (
    <PreviewLayout
      icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
      title="Employment histtory"
      subTitle="fontend web developer at doncodes tech"
      duration={"july 2023 - aug 2024"}
      description={
        "creating reusable component and integrating third party Api into web applications for real time data exchange."
      }
    />
  );
};

export default Employmenthistory;
