import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { InputField } from "../components/Index";

const Sections = () => {
  return (
    <main
      className="border px-4 pb-4 text-sm"
      onClick={() => toggleForm(sectionRef)}
    >
      <section
        className="flex justify-between cursor-pointer 
        z-50 py-4 relative overflow-hidden bg-white hover:[&_b]:text-blue-500"
      >
        <div>
          <b className="w-full">Frontend web developer at Naprima Ideal Tech</b>
          <p className="capitalize text-neutral-500">jul 2023 - Aug 2023</p>
        </div>
        <ChevronDownIcon className="rotateIcon1 w-5 text-neutral-500 font-bold" />
      </section>

      <section ref={sectionRef} className="displayForm ease-in duration-300">
        <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 ">
          {inputFileds.map((input, index) =>
            !input.startDate ? (
              <InputField
                key={index}
                name={input.name}
                type={input.title}
                placeholder={input.placeholder}
              />
            ) : (
              <div key={index} className="grid grid-cols-2 gap-5 items-center">
                <InputField
                  name={input.startDate.name}
                  type={input.startDate.title}
                  placeholder={input.startDate.placeholder}
                />
                <div className="lg:pt-5">
                  <InputField
                    name={""}
                    type={input.endDate.title}
                    placeholder={input.endDate.placeholder}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default Sections;
