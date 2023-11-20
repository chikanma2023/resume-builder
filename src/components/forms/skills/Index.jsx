import { useRef, useState } from "react";
import MainLayout from "../../../layouts/MainLayout";
import { ToggleBtn, Header, InputField, Button } from "../../index";
import Card from "./Card";
import toggleForm from "../../../lib/Helper";

const levels = [
  { id: 0, label: "novice", border: "none", bg: "bg-red-100" },
  { id: 20, label: "entry", border: "border-r", bg: "bg-red-200" },
  { id: 40, label: "Intermediate", border: "border-r", bg: "bg-yellow-300" },
  { id: 60, label: "professional", border: "border-r", bg: "bg-red-400" },
  { id: 80, label: "classic", border: "border-r", bg: "bg-red-500" },
];

const Index = () => {
  const formRef = useRef();
  const [selected, setSeleceted] = useState({
    id: 0,
    label: "novice",
    title: "",
  });

  const indicator = (id, label) =>
    setSeleceted({ ...selected, id: id, label: label });

  return (
    <MainLayout
      title="Skills"
      description="Choose 5 important skills that show you fit position. 
      Make they match the key skills mentioned in the job listing (especially when applying via online system)."
    >
      <ToggleBtn />
      <Card />

      <div className="border p-4 mb-3">
        <Header
          headerTitle={selected.title}
          text={selected.label}
          onclick={() => toggleForm(formRef)}
        />
        <div
          ref={formRef}
          className="displayForm ease-in duration-300 grid grid-cols-1 gap-5 lg:grid-cols-2"
        >
          <InputField
            type="text"
            name="skill"
            placeholder=""
            onchange={(e) =>
              setSeleceted({ ...selected, title: e.target.value })
            }
          />
          <main className="flex flex-col gap-0.5 justify-center">
            <div className="flex gap-1 capitalize text-xs text-neutral-500">
              {"level"} - <p className="text-red-500">{selected.label}</p>
            </div>
            <div className="relative flex cursor-pointer rounded bg-red-50">
              {levels.map((level, index) => (
                <div
                  key={index}
                  className={
                    selected.id == level.id
                      ? `w-20 h-11 py-2 flex items-center rounded transition duration-150 ease-in-out ${level.bg}`
                      : `w-20 h-11 py-2 flex items-center`
                  }
                  onClick={() => indicator(level.id, level.label)}
                >
                  <div
                    className={`h-1/2 ${level.border} border-r-red-500 z-30`}
                  ></div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Button
        text="Add one more link"
        onclick={() => console.log("Add one more link")}
      />
    </MainLayout>
  );
};

export default Index;
