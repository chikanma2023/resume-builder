import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import MainLayout from "../../../layouts/MainLayout";
import { Header, InputField } from "../..";
import toggleForm from "../../../lib/Helper";
import { education } from "../../../Reducers/Index";

const Education = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [InputFields, setInputFields] = useState([
    { type: "text", name: "school" },
    { type: "text", name: "degree" },
    { type: "date", name: "startDate" },
    { type: "date", name: "enddate" },
    { type: "text", name: "city" },
  ]);

  const [data, setData] = useState({});

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let getCurrentValue = [...InputFields];
    getCurrentValue[index][name] = value;
    setInputFields(getCurrentValue);

    setData({
      school: InputFields[0].school,
      degree: InputFields[1].degree,
      startDate: InputFields[2].startDate,
      enddate: InputFields[3].enddate,
      city: InputFields[4].city,
    });

    dispatch(
      education({
        school: InputFields[0].school,
        degree: InputFields[1].degree,
        startDate: InputFields[2].startDate,
        enddate: InputFields[3].enddate,
        city: InputFields[4].city,
      })
    );
  };

  const getDescription = (event) => {
    dispatch(education({ ...data, description: event }));
  };
  return (
    <MainLayout title="Education" description="Show your relevant experience">
      <div className="border p-4">
        <Header
          headerTitle={"(Not specified)"}
          text={""}
          onclick={() => toggleForm(formRef)}
        />

        <div ref={formRef} className="displayForm ease-in-out duration-300">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {InputFields.map((inputField, index) => (
              <InputField
                key={index}
                type={inputField.type}
                placeholder=""
                name={inputField.name}
                onchange={(event) => handleChange(event, index)}
              />
            ))}
          </div>

          <div>
            <ReactQuill
              // value={value}
              onChange={(event) => getDescription(event)}
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
        </div>
      </div>
    </MainLayout>
  );
};

export default Education;
