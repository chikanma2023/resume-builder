import { UserIcon } from "@heroicons/react/24/solid";
import { InputField } from "../../components/personalDetails/Index";

const JobTitle = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-5 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-2 mb-3 text-sm">
        <InputField
          type="type"
          name="wanted job title"
          placeholder="eg: Frontend developer"
        />
      </div>
      <main className="w-full lg:w-1/2 hover:[&_*]:text-blue-600">
        <section className="flex items-center text-sm gap-3 ">
          <label
            htmlFor="profileImage"
            className="flex items-center gap-5 cursor-pointer text-gray-400"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded cursor-pointer bg-gray-100">
              <UserIcon className="w-10 h-10 text-gray-400" />
            </div>
            Upload photo
          </label>
          <input type="file" className="hidden" id="profileImage" />
        </section>
      </main>
    </section>
  );
};

export default JobTitle;
