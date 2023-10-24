import { useForm } from "react-hook-form";

const InputFields = [
  { type: "text", name: "first name", placeholder: "Eg: joe" },
  { type: "text", name: "last name", placeholder: "Eg: smith" },
  { type: "email", name: "email", placeholder: "Eg: joe@gmail.com" },
  { type: "tel", name: "phone", placeholder: "Eg: +123 90112233" },
  { type: "text", name: "country", placeholder: "Eg: Nigeria" },
  { type: "text", name: "city", lable: "city", placeholder: "Eg: Umuahia" },
];

const Personal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onchange = (data) => {
    console.log(data);
  };

  return (
    <>
      <form className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
        {InputFields.map((input, index) => (
          <div key={index} className="flex flex-col gap-2 mb-3 text-sm">
            <label htmlFor="" className="capitalize text-gray-400">
              {input.name}
            </label>

            <input
              type={input.type}
              name={input.name}
              className="py-3 px-4 bg-blue-50 transition duration-300 ease-in-out 
              focus:outline-none border-b-2 border-b-transparent focus:border-b-blue-500"
              placeholder={input.placeholder}
              {...register(input.name, { required: true })}
            />
            <p className="text-red-500">
              {errors.name == "required" && "This field is required"}
            </p>
          </div>
        ))}
      </form>
    </>
  );
};

export default Personal;
