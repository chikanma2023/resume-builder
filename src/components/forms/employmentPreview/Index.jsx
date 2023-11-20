import { ViewText } from "../index";

const Index = ({ icon }) => {
  return (
    <ViewText
      icon={icon}
      title="Employment history"
      subTitle="fontend web developer at doncodes tech"
      duration={"july 2023 - aug 2024"}
      description={
        "creating reusable component and integrating third party Api into web applications for real time data exchange."
      }
    />
  );
};

export default Index;
