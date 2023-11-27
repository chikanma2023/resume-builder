import { useSelector } from "react-redux";
import TemplateOneHeader from "../../Atoms/template_one_header/Index";

const PreviewText = ({ title, sub_title, duration, description }) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <p className="font-bold capitlize text-2xl">{title}</p>
      <p
        className={sub_title && "font-bold capitalize bg-black text-white p-1"}
      >
        {sub_title}
      </p>
      <p>{duration}</p>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

const Contact = ({ title, description, className }) => {
  return (
    <div className={"bg-neutral-100 rounded-2xl p-3"}>
      <b className="text-[1.5em] capitalize">{title}</b>
      <p
        className={`mt-2 break-words ${className}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
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
            sub_title={`${employment.title} at ${employment.employer}, ${employment.city}`}
            duration={`${employment.startDate} - ${employment.enddate}`}
            description={employment.description}
          />

          <PreviewText // Education
            title="Education"
            sub_title={
              education.school &&
              `${education.degree}, ${education.school}, ${education.city}`
            }
            duration={
              education.startDate &&
              `${education.startDate} - ${education.enddate}`
            }
            description={education.description}
          />

          <PreviewText // Intership
            title="Intership"
            sub_title={
              internship.title &&
              `${internship.title} at ${internship.employer}, ${internship.city}`
            }
            duration={
              internship.startDate &&
              `${internship.startDate} - ${internship.enddate}`
            }
            description={internship.description}
          />
        </div>
        {/* Contacts */}
        <div className="w-1/3 flex flex-col gap-3">
          <Contact
            title="links"
            description={contacts.link}
            className={"underline"}
          />
          <Contact title="skills" description={"Html, Css"} />
        </div>
      </div>
    </>
  );
};

export default Template2;
