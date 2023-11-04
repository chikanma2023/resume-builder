import { useSelector } from "react-redux";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

import {
  ProfileImagePreview,
  Profile,
  EmploymentHistoryPreview,
  EducationPreview,
  InternshipPreview,
  Contacts,
  SocialLinksPreview,
} from "../../index";

export default function Template1() {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <>
      <ProfileImagePreview data={value} />
      <div className="w-full flex gap-5">
        <div className="w-2/3 flex flex-col gap-3">
          <Profile data={value} />
          <EmploymentHistoryPreview
            icon={<BriefcaseIcon className="w-3 h-3 text-black" />}
          />
          <EducationPreview />
          <InternshipPreview />
        </div>
        <div className="w-1/3 flex flex-col gap-3">
          <Contacts data={value} />
          <SocialLinksPreview />
        </div>
      </div>
    </>
  );
}
