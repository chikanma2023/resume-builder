import { useSelector } from "react-redux";
import TemplateOneHeader from "../../Atoms/template_one_header/Index";

const PreviewText = ({ title, sub_title, duration, description }) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <p className="font-bold capitlize text-2xl">{title}</p>
      <p className="font-bold capitalize bg-black text-white p-1">
        {sub_title}
      </p>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
};


const Template2 = () => {
  const {
    details,
    employment,
    // summary,
    education,
    contacts,
    // skills,
    internship,
  } = useSelector((state) => state.actions);

  return (
    <>
      <TemplateOneHeader data={details} />
      <div className="flex gap-5 text-xs">
        <div className="w-2/3">
          <PreviewText // Employment history
            title="Employment History"
            sub_title="frontend web developer at naprima ideal tech"
            duration={"2022 - 2023"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatem!"
            }
          />

          <PreviewText // Education
            title="Education"
            sub_title="B.sc michael okpara university of agriculture umudike, umuahia"
            duration={"2022 - 2023"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptatem!"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Template2;
