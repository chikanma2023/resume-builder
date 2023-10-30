import { BookOpenIcon } from "@heroicons/react/24/solid";
import { PreviewLayout } from "./Index";

const EDucation = () => {
  return (
    <PreviewLayout
      icon={<BookOpenIcon className="w-3 h-3 text-black" />}
      title="Education"
      subTitle=""
      duration={""}
      description={
        "Studied computer science at michael okpara university of agriculture umudike."
      }
    />
  );
};

export default EDucation;
