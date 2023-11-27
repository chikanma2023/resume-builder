import { useSelector } from "react-redux";
import ViewText from "../../Atoms/ViewText";
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { ProfileImage, Contacts } from "./templates/Index";

const SetInnerHTML = ({ className, text }) => {
  return (
    <p
      className={className}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></p>
  );
};

const Template1 = () => {
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
      <ProfileImage data={details} />
      <div className="w-full flex gap-5">
        <div className="w-2/3 flex flex-col gap-3">
          <ViewText //=============== Profile preview===============
            icon={<UserIcon className="w-3 h-3 text-black" />}
            title="Profile"
            subTitle={<SetInnerHTML text={details.summary} />}
          />

          <ViewText //========== Employment history preview==========
            icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
            title="Employment history"
            duration={
              employment.startDate &&
              `${employment.startDate} - ${employment.enddate}`
            }
            description={<SetInnerHTML text={employment.description} />}
            subTitle={
              <SetInnerHTML
                className="font-bold"
                text={
                  employment.title &&
                  `${employment.title} at ${employment.employer}`
                }
              />
            }
          />

          <ViewText //============= Education preview=============
            icon={<AcademicCapIcon className="w-3 h-3 text-black" />}
            title="Education"
            duration={
              education.startDate &&
              `${education.startDate} - ${education.enddate}`
            }
            description={<SetInnerHTML text={education.description} />}
            subTitle={
              <SetInnerHTML
                className="font-bold"
                text={
                  education.school && `${education.degree}, ${education.school}`
                }
              />
            }
          />

          <ViewText //========== Internship history preview==========
            icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
            title="internship"
            duration={
              internship.startDate &&
              `${internship.startDate} - ${internship.enddate}`
            }
            description={<SetInnerHTML text={internship.description} />}
            subTitle={
              <SetInnerHTML
                className="font-bold"
                text={
                  internship.title &&
                  `${internship.title} at ${internship.employer}`
                }
              />
            }
          />
        </div>
        {/* Contacts */}
        <div className="w-1/3 flex flex-col gap-3">
          <Contacts data={details} link={contacts} />
        </div>
      </div>
    </>
  );
};

export default Template1;
