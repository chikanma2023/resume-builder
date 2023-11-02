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
  return (
    <div>
      <ProfileImagePreview />
      <div className="w-full flex gap-5">
        <div className="w-2/3 flex flex-col gap-3">
          <Profile />
          <EmploymentHistoryPreview />
          <EducationPreview />
          <InternshipPreview />
        </div>
        <div className="w-1/3 flex flex-col gap-3">
          <Contacts />
          <SocialLinksPreview />
        </div>
      </div>
    </div>
  );
}
