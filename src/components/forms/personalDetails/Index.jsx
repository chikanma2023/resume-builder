import { useState } from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import ProfileImage from "./ProfileImage";
import { Title, InputField } from "../../index";
import { personalDetails } from "../../../Reducers/Index";

const Index = () => {
  const dispatch = useDispatch();
  const [summary, setSummary] = useState();
  const [formValues, setFormValues] = useState([
    { type: "text", name: "firstName", placeholder: "Eg: joe" },
    { type: "text", name: "lastName", placeholder: "Eg: smith" },
    { type: "email", name: "email", placeholder: "Eg: joe@gmail.com" },
    { type: "tel", name: "phone", placeholder: "Eg: +123 90112233" },
    { type: "text", name: "country", placeholder: "Eg: Nigeria" },
    { type: "text", name: "city", lable: "city", placeholder: "Eg: Umuahia" },
  ]);

  const [data, setData] = useState({});

  // Get and dispatch user input
  const handleChange = (event, index) => {
    if (event) {
      let { name, value } = event.target;
      let currentInput = [...formValues];
      currentInput[index][name] = value;
      setFormValues(currentInput);

      setData({
        firstname: formValues[0].firstName,
        lastname: formValues[1].lastName,
        email: formValues[2].email,
        phone: formValues[3].phone,
        country: formValues[4].country,
        city: formValues[5].city,
      });

      dispatch(
        personalDetails({
          firstname: formValues[0].firstName,
          lastname: formValues[1].lastName,
          email: formValues[2].email,
          phone: formValues[3].phone,
          country: formValues[4].country,
          city: formValues[5].city,
          summary,
        })
      );
    }
  };

  const getSummary = (event) => {
    setSummary(event);
    dispatch(personalDetails({ ...data, summary }));
  };

  return (
    <>
      <Title title="personal details" />
      <ProfileImage />
      <form className="grid grid-cols-1 gap-x-5 lg:grid-cols-2">
        {formValues.map((input, index) => (
          <div key={index} className="flex flex-col gap-2 mb-3 text-sm">
            <InputField
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onchange={(event) => handleChange(event, index)}
            />
          </div>
        ))}
      </form>
      <div>
        <Title
          title="Professional Summary"
          description="Write 2-4 short & energetic sentences to interest the reader! Mention your 
        role, experience & most importantly - your biggest achievements, best qualities and skills."
        />
        <ReactQuill
          // value={value}
          onChange={(event) => getSummary(event)}
          modules={{
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          }}
          theme="snow"
          className="w-[100%] h-36 mb-20"
        />
      </div>
    </>
  );
};

export default Index;
