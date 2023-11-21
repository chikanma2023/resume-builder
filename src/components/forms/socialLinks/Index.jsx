import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../../../layouts/MainLayout";
import { Header, InputField, Button } from "../..";
import toggleForm from "../../../lib/Helper";
import { contacts } from "../../../Reducers/bodyReducers/Index";

const Index = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  const [inputField, setInputField] = useState([
    { type: "text", name: "label" },
    { type: "text", name: "link" },
  ]);

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let getCurrentValue = [...inputField];
    getCurrentValue[index][name] = value;
    setInputField(getCurrentValue);

    dispatch(
      contacts({
        label: inputField[0].label,
        link: inputField[1].link,
      })
    );
  };

  return (
    <MainLayout
      title="Websites & Social links"
      description="You can add links to websites you want hiring managers to see!. 
      Perhaps it will be a link to your portfolio. Linkedin profile or personal website."
    >
      <div className="border p-4 mb-3">
        <Header
          headerTitle={inputField[1].link || "(Not specified)"}
          text={""}
          onclick={() => toggleForm(formRef)}
        />
        <main ref={formRef} className="displayForm ease-in-out duration-150">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {inputField.map((input, index) => (
              <InputField
                key={index}
                type={input.type}
                name={input.name}
                onchange={(event) => handleChange(event, index)}
              />
            ))}
          </div>
        </main>
      </div>
      <Button
        text="Add one more link"
        onclick={() => console.log("Add one more link")}
      />
    </MainLayout>
  );
};

export default Index;
