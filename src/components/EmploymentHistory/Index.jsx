import { useState, useRef } from "react";
import { Header, InputField, Reactquill, Button } from "..";
import MainLayout from "../../layouts/MainLayout";
import toggleForm from "../../lib/Helper";

const Index = () => {
  const formRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = (data) => {
    setValue(data);
  };


  const inputs = [
    [
      { type: "text", name: "jobTitle" },
      { type: "text", name: "Employer" },
      { type: "text", name: "startDate" },
      { type: "text", name: "enddate" },
      { type: "text", name: "city" },
    ],
  ];

  return (
    <MainLayout
      title="Employment history"
      description="Show your relevant experience"
    >
      {inputs.map((input, index) => (
        <div key={index} className="border p-4 mb-3">
          <Header
            headerTitle={"(Not specified)"}
            text={""}
            onclick={() => toggleForm(`${input.type}${index}`)}
          />

          <div
            className={`displayForm ease-in-out duration-300 ${input.type}${index}`}
          >
            <div
              className={index < 2 && "grid grid-col-1 gap-3 lg:grid-cols-2"}
            >
              {inputs[index].map(
                (inputField, index) =>
                  index < 2 && (
                    <InputField
                      key={index}
                      type={inputField.type}
                      name={inputField.name}
                      placeholder=""
                    />
                  )
              )}
            </div>
            <div className={"grid grid-col-1 gap-1 lg:grid-cols-3"}>
              {inputs[index].map((inputField, ind) =>
                (ind > 1 && inputField.name == "startDate") ||
                inputField.name == "enddate" ? (
                  <div key={ind} className="gap-1">
                    <InputField
                      key={ind}
                      type={inputField.type}
                      name={inputField.name}
                    />
                  </div>
                ) : (
                  inputField.name == "city" && (
                    <InputField
                      key={ind}
                      type={inputField.type}
                      name={inputField.name}
                    />
                  )
                )
              )}
            </div>
          </div>
        </div>
      ))}

      <Button
        text="add one more employment"
        onclick={() => console.log("add more sections")}
      />
    </MainLayout>
  );
};

export default Index;

a;