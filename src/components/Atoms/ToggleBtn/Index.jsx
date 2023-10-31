import { useRef } from "react";

const Index = () => {
  const toggleRef = useRef();

  const toggle = (indicator) =>
    indicator.current.classList.contains("toggle")
      ? indicator.current.classList.remove("toggle")
      : indicator.current.classList.add("toggle");

  return (
    <div className="flex gap-3 items-center text-sm my-4">
      <div
        className="relative flex items-center w-9 h-5 p-0.5 rounded-full cursor-pointer bg-neutral-300"
        onClick={() => toggle(toggleRef)}
      >
        <div
          ref={toggleRef}
          className="w-[18px] h-[18px] absolute rounded-full drop-shadow-md bg-white "
        ></div>
      </div>
      <p>Dont show experience level!</p>
    </div>
  );
};

export default Index;
