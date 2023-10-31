import { PlusIcon } from "@heroicons/react/24/solid";
const index = ({ text }) => {
  return (
    <button
      className="flex items-center gap-2 text-xs text-blue-500 font-bold"
      onClick={onclick}
    >
      <PlusIcon className="w-5 h-5" />
      {text}
    </button>
  );
};

export default index;
