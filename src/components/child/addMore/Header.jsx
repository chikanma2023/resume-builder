import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = ({ onclick, headerTitle, text }) => {
  return (
    <section
      className="flex justify-between cursor-pointer capitalize text-xs 
      pt-0 pb-5 relative overflow-hidden bg-white hover:[&_b]:text-blue-500"
      onClick={onclick}
    >
      <div>
        <p className="font-semibold">
          {!headerTitle ? "(Not specified)" : headerTitle}
        </p>
        <p className="text-neutral-400">{text}</p>
      </div>
      <ChevronDownIcon className="rotateIcon1 w-5 text-neutral-500 font-bold" />
    </section>
  );
};

export default Header;
