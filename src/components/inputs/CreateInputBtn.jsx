import { PlusCircleIcon } from "@heroicons/react/24/solid";

const CreateInputBtn = ({ onclick }) => {
  return (
    <button className="flex gap-2 text-blue-500 font-bold" onClick={onclick}>
      <PlusCircleIcon className="w-5 h-5 text-neutral-700" />
      Add more section
    </button>
  );
};

export default CreateInputBtn;
