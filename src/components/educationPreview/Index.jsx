import { BookOpenIcon } from "@heroicons/react/24/solid";
import View from "../../layouts/View";

const Index = () => {
  return (
    <View
      icon={<BookOpenIcon className="w-3 h-3 text-black" />}
      title="Education"
      description={
        "Studied computer science at michael okpara university of agriculture umudike."
      }
    />
  );
};

export default Index;
