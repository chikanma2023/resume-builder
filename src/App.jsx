// Form
import {
  Title,
  JobTitle,
  Details,
  ProfessionalSummary,
  EmploymentHistory,
  Education,
  SocialLinks,
  Skills,
  Internship,
} from "./components/personalDetails/Index";

// Preview
import {
  ProfileImage,
  Profile,
  Employmenthistory,
  EDucation,
  INtership,
  Contacts,
  Links,
  Skill,
} from "./components/preview/Index";

const App = () => {
  return (
    <section className="relative container mx-auto">
      <div className="flex justify-between items-start">
        <main className="w-full bg-white px-5 py-10 lg:w-1/2">
          <Title title="personal details" description="" />
          <JobTitle />
          <Details />
          <ProfessionalSummary />
          <EmploymentHistory />
          <Education />
          <SocialLinks />
          <Skills />
          <Internship />
        </main>
        <main className="hidden fixed right-0 w-1/2 h-[100vh] py-5 px-20 lg:flex bg-gray-500">
          <section className="bg-white rounded min-h-[90vh] w-[100%] flex flex-col gap-4 py-10 px-5">
            <ProfileImage />
            <main className="flex gap-5">
              <div className="w-2/3 flex flex-col gap-3">
                <Profile />
                <Employmenthistory />
                <EDucation />
                <INtership />
              </div>
              <div className="flex flex-col gap-3">
                <Contacts />
                <Links />
                <Skill />
              </div>
            </main>
          </section>
        </main>
      </div>
    </section>
  );
};

export default App;
