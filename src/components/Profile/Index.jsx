import { UserIcon } from "@heroicons/react/24/solid";
import ViewText from "../Atoms/ViewText";

const Index = ({ data }) => {
  return (
    <ViewText
      icon={<UserIcon className="w-3 h-3 text-black" />}
      title="Profile"
      subTitle={
        <p dangerouslySetInnerHTML={{ __html: data.professionalSummary }}></p>
      }
    />
  );
};

export default Index;
