import { BookOpenIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import ViewText from "../Atoms/ViewText";

const Index = () => {
  const { value } = useSelector((state) => state.personalInfo);
  const { title, employer, startDate, enddate, city } = value;

  const previews = [
    {
      previewTitle: "Employment History",
      title,
      employer,
      startDate,
      enddate,
      city,
    },
  ];

  return (
    <div>
      {previews.map((preview) => (
        <ViewText
          key={preview.previewTitle}
          icon={<BookOpenIcon className="w-3 h-3 text-black" />}
          title={preview.previewTitle}
          subTitle={`${preview.title}  ${preview.employer}`}
          duration={`${preview.startDate} - ${preview.enddate}`}
        />
      ))}
    </div>
  );
};

export default Index;
