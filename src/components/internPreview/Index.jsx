import { UserGroupIcon } from "@heroicons/react/24/solid";
import PreviewLayout from "../../layouts/PreviewLayout";

const Index = () => {
  return (
    <PreviewLayout
      icon={<UserGroupIcon className="w-3 h-3 text-black" />}
      title="Internship"
      subTitle="frontend web development at naprima ideal"
      duration={"july 2023 - aug 2024"}
    />
  );
};

export default Index;