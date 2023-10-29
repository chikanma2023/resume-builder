import { Title } from "../components/personalDetails/Index";

const MainLayout = ({ title, description, children }) => {
  return (
    <section className="relative my-20">
      <Title title={title} description={description} />
      {children}
    </section>
  );
};

export default MainLayout;
