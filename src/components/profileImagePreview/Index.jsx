import { useSelector } from "react-redux";

const Index = () => {
  const { value } = useSelector((state) => state.personalInfo);

  return (
    <div className="flex flex-col gap-10 text-xs mb-4 capitalize">
      <div className="flex items-center gap-3 text-neutral-400 text-sm">
        <div className="w-16 h-14 flex items-center justify-center rounded cursor-pointer bg-gray-100">
          <img
            src={value && value.profileImage}
            className={
              value && value.profileImage ? "w-full h-full rounded" : "hidden"
            }
          />
        </div>
        <div className="text-black">
          {value && value.firstname} {value && value.lastname}
          <p className="text-xs text-gray-400 font-semibold">
            {value && value.jobTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
