import { Title, InputField } from "..";
import JobTitle from "./JobTitle";

const inputs = [
  { type: "text", name: "first name", placeholder: "Eg: joe" },
  { type: "text", name: "last name", placeholder: "Eg: smith" },
  { type: "email", name: "email", placeholder: "Eg: joe@gmail.com" },
  { type: "tel", name: "phone", placeholder: "Eg: +123 90112233" },
  { type: "text", name: "country", placeholder: "Eg: Nigeria" },
  { type: "text", name: "city", lable: "city", placeholder: "Eg: Umuahia" },
];

const Index = () => {
  return (
    <>
      <Title title="personal details" description="" />
      <JobTitle />
      <form className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
        {inputs.map((input, index) => (
          <div key={index} className="flex flex-col gap-2 mb-3 text-sm">
            <InputField
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default Index;
