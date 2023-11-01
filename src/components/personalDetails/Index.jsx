import { useState } from "react";
import { useDispatch } from "react-redux";
import ProfileImage from "./ProfileImage";
import { Title, InputField } from "..";
import { details } from "../../Reducers/personalDetails";

const Index = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState([
    { type: "text", name: "firstname", placeholder: "Eg: joe" },
    { type: "text", name: "lastname", placeholder: "Eg: smith" },
    { type: "email", name: "email", placeholder: "Eg: joe@gmail.com" },
    { type: "tel", name: "phone", placeholder: "Eg: +123 90112233" },
    { type: "text", name: "country", placeholder: "Eg: Nigeria" },
    { type: "text", name: "city", lable: "city", placeholder: "Eg: Umuahia" },
  ]);

  const getForminputs = (event, index) => {
    let { name, value } = event.target;
    let currentInput = [...formValues];
    currentInput[index][name] = value;
    setFormValues(currentInput);
    dispatch(
      details({
        firstname: formValues[0].firstname,
        lastname: formValues[1].lastname,
        email: formValues[2].email,
        phone: formValues[3].phone,
        country: formValues[4].country,
        city: formValues[5].city,
      })
    );
  };

  return (
    <>
      <Title title="personal details" description="" />
      <ProfileImage />
      <form className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
        {formValues.map((input, index) => (
          <div key={index} className="flex flex-col gap-2 mb-3 text-sm">
            <InputField
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onchange={(event) => getForminputs(event, index)}
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default Index;
