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

const App = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-start">
        <main className="w-1/2 bg-white px-5 py-10">
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
        <main className="w-1/2 p-5 flex flex-col justify-center bg-gray-500">
          <section className="bg-white  rounded">
            <p>Hart chikanma Justman</p>
          </section>
        </main>
      </div>
    </section>
  );
};

export default App;
