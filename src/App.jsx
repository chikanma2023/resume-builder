import {
  Title,
  JobTitle,
  Personaldetails,
  ProfessionalSummary,
  EmploymentHistory,
} from "./components/Index";

const App = () => {
  return (
    <section className="container mx-auto px-5 py-10 pb-20j">
      <div className="grid grid-col-1 gap-3 lg:grid-cols-2">
        <main>
          <Title title="personal details" description="" />
          <JobTitle />
          <Personaldetails />
          <ProfessionalSummary />
          <EmploymentHistory />
        </main>
      </div>
    </section>
  );
};

export default App;
