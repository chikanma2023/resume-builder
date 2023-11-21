import { PlusIcon } from "@heroicons/react/24/solid";

const Card = () => {
  const skills = ["java", "javascript", "python", "data analysis"];

  return (
    <div className="flex flex-wrap gap-5 my-4">
      {skills.map((skill, index) => (
        <span
          key={index}
          onClick={() => console.log(skill)}
          className="flex items-center justify-around py-2 px-3 capitalize text-xs rounded cursor-pointer bg-blue-100"
        >
          {skill}
          <PlusIcon className="w-4 h-4" />
        </span>
      ))}
    </div>
  );
};

export default Card;
