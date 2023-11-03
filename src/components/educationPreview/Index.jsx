import { BookOpenIcon } from "@heroicons/react/24/solid";
import { ViewText } from "../index";

const Index = () => {
  return (
    <ViewText
      icon={<BookOpenIcon className="w-3 h-3 text-black" />}
      title="Education"
      subTitle={
        "Studied computer science at michael okpara university of agriculture umudike."
      }
    />
  );
};

export default Index;
