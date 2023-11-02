import { useSelector } from "react-redux";

const Index = () => {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <div className="w-full text-xs">
      <p className="font-bold mb-1">Details</p>
      <div className="flex flex-col gap-1">
        <p className="first-letter:capitalize">{value.city}</p>
        <p className="first-letter:capitalize">{value.country}</p>
        <p className="first-letter:capitalize">{value.phone}</p>
        <p className="break-words text-blue-500">{value.email}</p>
      </div>
    </div>
  );
};

export default Index;
