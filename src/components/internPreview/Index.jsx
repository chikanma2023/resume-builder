import { UserGroupIcon } from "@heroicons/react/24/solid";
import View from "../../layouts/View";

const Index = () => {
  return (
    <View
      icon={<UserGroupIcon className="w-3 h-3 text-black" />}
      title="Internship"
      subTitle="frontend web development at naprima ideal"
      duration={"july 2023 - aug 2024"}
    />
  );
};

export default Index;
