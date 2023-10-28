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
} from "./components/Index";

const App = () => {
  return (
    <section className="container mx-auto px-5 py-10">
      <div className="grid grid-col-1 gap-3 lg:grid-cols-2">
        <main>
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
      </div>
    </section>
  );
};

export default App;
