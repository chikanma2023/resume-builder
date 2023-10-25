import { ChevronDownIcon } from "@heroicons/react/24/solid";

const SectionHeader = ({ onclick, title, date }) => {
  return (
    <section
      className="flex justify-between cursor-pointer
        z-50 py-4 relative overflow-hidden bg-white hover:[&_b]:text-blue-500"
      onClick={onclick}
    >
      <div>
        <b className="w-full">{title}</b>
        <p className="capitalize text-neutral-500">{date}</p>
      </div>
      <ChevronDownIcon className="rotateIcon1 w-5 text-neutral-500 font-bold" />
    </section>
  );
};

export default SectionHeader;
