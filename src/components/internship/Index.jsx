import { useState, useRef } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Header, InputField, Reactquill, Button } from "..";
import toggleForm from "../../lib/Helper";

const Index = () => {
  const formRef = useRef();
  const [value, setValue] = useState("");

  const handleChange = (data) => {
    setValue(data);
  };

  return (
    <MainLayout title="internships">
      <div className="border p-4 mb-3">
        <Header
          headerTitle={""}
          text={""}
          onclick={() => toggleForm(formRef)}
        />

        <main ref={formRef} className="displayForm ease-in duration-300">
          <div className="grid grid-col-1 gap-3 lg:grid-cols-2">
            <InputField type={"text"} name={"job title"} placeholder="" />
            <InputField type={"text"} name={"Employer"} placeholder="" />
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              <InputField type={"text"} name={"Start date"} placeholder="" />
              <InputField type={"text"} name={"stop date"} placeholder="" />
            </div>
            <InputField type={"text"} name={"city"} placeholder="" />
          </div>
          <Reactquill
            Description="Description"
            onchnage={(event) => handleChange(event)}
            value={value}
          />
        </main>
      </div>
      <Button
        text="add one more employment"
        onclick={() => console.log("add more sections")}
      />
    </MainLayout>
  );
};

export default Index;
