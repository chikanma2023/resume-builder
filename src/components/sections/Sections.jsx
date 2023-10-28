import {
  InputField,
  Inputs,
  CreateInputAction,
  CreateInputBtn,
} from "../Index";
import { useRef, useState } from "react";
// import SectionHeader from "./SectionHeader";

const Sections = () => {
  const sectionRef = useRef(null);
  const [inputs, setInputs] = useState(Inputs);

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    console.log(name);
    let getCurrentInput = [...inputs];
    getCurrentInput[index][name] = value;
    setInputs(getCurrentInput);
  };

  const toggleForm = (formContainer) => {
    if (formContainer) {
      if (formContainer.current.classList.contains("displayForm")) {
        formContainer.current.classList.remove("displayForm");
      } else {
        formContainer.current.classList.add("displayForm");
      }
    }
  };

  const addNewInputs = () => setInputs(CreateInputAction(inputs));

  return (
    <>
      <main className="border px-4 pb-4 text-sm my-5">
        <Header
          headerTitle={"Frontend web developer at Naprima Ideal Tech"}
          date={"jul 2023 - Aug 2023"}
          onclick={() => toggleForm(sectionRef)}
        />

        <section ref={sectionRef} className="displayForm ease-in duration-300">
          <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 ">
            {inputs.map((input, index) =>
              !input.startDate ? (
                <InputField
                  key={index}
                  name={input.name}
                  type={input.title}
                  placeholder={input.placeholder}
                  onchange={(event) => handleChange(event, index)}
                />
              ) : (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-5 items-center"
                >
                  <InputField
                    name={input.startDate.name}
                    type={input.startDate.title}
                    placeholder={input.startDate.placeholder}
                    onchange={(event) => handleChange(event, index)}
                  />
                  <div>
                    <InputField
                      name={input.endDate.name}
                      type={input.endDate.title}
                      placeholder={input.endDate.placeholder}
                      onchange={(event) => handleChange(event, index)}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </section>
      </main>
      <CreateInputBtn onclick={() => addNewInputs()} />
    </>
  );
};

export default Sections;
