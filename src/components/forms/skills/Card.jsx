import { PlusIcon } from "@heroicons/react/24/solid";

const Card = () => {
  return (
    <div className="flex flex-wrap gap-5 my-4">
      <span className="flex items-center justify-around py-2 px-3 capitalize text-xs rounded cursor-pointer bg-blue-100">
        java
        <PlusIcon className="w-4 h-4" />
      </span>
      <span className="flex items-center justify-around py-2 px-3 capitalize text-xs rounded cursor-pointer bg-blue-100">
        javascript
        <PlusIcon className="w-4 h-4" />
      </span>{" "}
      <span className="flex items-center justify-around py-2 px-3 capitalize text-xs rounded cursor-pointer bg-blue-100">
        Data analysis
        <PlusIcon className="w-4 h-4" />
      </span>
    </div>
  );
};

export default Card;
