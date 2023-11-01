import { useState } from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const { value } = useSelector((state) => state.personalInfo);
  const [details] = useState(!value ? "" : value);
  console.log(value);

  return (
    <div className="text-xs">
      <p className="font-bold mb-1">Details</p>
      <div className="flex flex-col gap-1">
        <p className="first-letter:capitalize">{details.city}</p>
        <p className="first-letter:capitalize">{details.country}</p>
        <p className="first-letter:capitalize">{details.phone}</p>
        <p className="text-blue-500">{details.email}</p>
      </div>
    </div>
  );
};

export default Index;
// email: action.payload.email,
//         phone: action.payload.phone,
//         country: action.payload.country,
//         city
