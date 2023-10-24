// import { ChevronDownIcon } from "@heroicons/react/24/solid";
// import { Title, InputField } from "../Index";
// import { useRef } from "react";

// const inputFileds = [
//   { type: "text", name: "job title", placeholder: "" },
//   { type: "text", name: "Employer", placeholder: "" },
//   {
//     startDate: {
//       type: "date",
//       name: "Start & end date",
//       placeholder: "MM / YYYY",
//     },
//     endDate: {
//       type: "date",
//       name: "Start & end date",
//       placeholder: "MM / YYYY",
//     },
//   },
//   { type: "text", name: "city", placeholder: "city" },
// ];

// const EmploymentHistory = () => {
//   const sectionRef = useRef(null);

//   const toggleForm = (formContainer) => {
//     if (formContainer) {
//       if (formContainer.current.classList.contains("displayForm")) {
//         formContainer.current.classList.remove("displayForm");
//       } else {
//         formContainer.current.classList.add("displayForm");
//       }
//     }
//   };

//   return (
//     <section className="my-20">
//       <div>
//         <Title
//           title="Employment history"
//           description="Show your relevant experience "
//         />
//       </div>
//       <main
//         className="border px-4 pb-4 text-sm"
//         onClick={() => toggleForm(sectionRef)}
//       >
//         <section
//           className="flex justify-between cursor-pointer
//         z-50 py-4 relative overflow-hidden bg-white hover:[&_b]:text-blue-500"
//         >
//           <div>
//             <b className="w-full">
//               Frontend web developer at Naprima Ideal Tech
//             </b>
//             <p className="capitalize text-neutral-500">jul 2023 - Aug 2023</p>
//           </div>
//           <ChevronDownIcon className="rotateIcon1 w-5 text-neutral-500 font-bold" />
//         </section>

//         <section ref={sectionRef} className="displayForm ease-in duration-300">
//           <div className="grid grid-cols-1 gap-5 p-5 lg:grid-cols-2 ">
//             {inputFileds.map((input, index) =>
//               !input.startDate ? (
//                 <InputField
//                   key={index}
//                   name={input.name}
//                   type={input.title}
//                   placeholder={input.placeholder}
//                 />
//               ) : (
//                 <div
//                   key={index}
//                   className="grid grid-cols-2 gap-5 items-center"
//                 >
//                   <InputField
//                     name={input.startDate.name}
//                     type={input.startDate.title}
//                     placeholder={input.startDate.placeholder}
//                   />
//                   <div className="lg:pt-5">
//                     <InputField
//                       name={""}
//                       type={input.endDate.title}
//                       placeholder={input.endDate.placeholder}
//                     />
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         </section>
//       </main>
//     </section>
//   );
// };

// export default EmploymentHistory;

import { useState } from "react";

export default function AddDynamicInputFields() {
  const [inputs, setInputs] = useState([{ firstName: "", lastName: "" }]);

  const handleAddInput = () => {
    setInputs([...inputs, { firstName: "", lastName: "" }]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };

  return (
    <div className="container">
      {inputs.map((item, index) => (
        <div className="input_container" key={index}>
          <input
            name="firstName"
            type="text"
            value={item.firstName}
            onChange={(event) => handleChange(event, index)}
          />
          <input
            name="lastName"
            type="text"
            value={item.lastName}
            onChange={(event) => handleChange(event, index)}
          />
          {inputs.length > 1 && (
            <button onClick={() => handleDeleteInput(index)}>Delete</button>
          )}
          {index === inputs.length - 1 && (
            <button onClick={() => handleAddInput()}>Add</button>
          )}
        </div>
      ))}

      <div className="body"> {JSON.stringify(inputs)} </div>
    </div>
  );
}
