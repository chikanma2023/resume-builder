import { useSelector } from "react-redux";
import TemplateOneHeader from "../../Atoms/template_one_header/Index";
import { EmploymentHistoryPreview } from "../../index";

const Template2 = () => {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <>
      <TemplateOneHeader data={value} />
      <div className="flex gap-5 text-xs">
        <div className="w-2/3">
          <EmploymentHistoryPreview />
        </div>
      </div>
    </>
  );
};

export default Template2;
