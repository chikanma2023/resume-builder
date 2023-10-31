import { Title } from "../components";

const MainLayout = ({ title, description, children }) => {
  return (
    <main className="relative my-20">
      <Title title={title} description={description} />
      {children}
    </main>
  );
};

export default MainLayout;
