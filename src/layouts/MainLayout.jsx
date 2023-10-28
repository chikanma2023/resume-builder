import { Title } from "../components/Index";

const MainLayout = ({ title, description, children }) => {
  return (
    <section className="my-20">
      <Title title={title} description={description} />
      {children}
    </section>
  );
};

export default MainLayout;
