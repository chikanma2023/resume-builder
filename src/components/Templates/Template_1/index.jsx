import { useSelector } from "react-redux";
import { Header } from "../../My_index";

const Template1 = () => {
  const { value } = useSelector((state) => state.personalInfo);
  const { data } = useSelector((state) => state.resumeBodyActions);

  return (
    <div>
      <Header headerObject={value} bodyObject={data} />
    </div>
  );
};

export default Template1;
