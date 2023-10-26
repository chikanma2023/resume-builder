import { UserIcon } from "@heroicons/react/24/solid";

const JobTitle = () => {
  return (
    <section className="flex flex-col-reverse items-start gap-5 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2 flex flex-col gap-2 mb-3 text-sm">
        <label htmlFor="" className="capitalize text-gray-400">
          wanted job title
        </label>
        <input
          type="text"
          placeholder="eg: Frontend developer"
          className="py-3 px-4 bg-blue-50 transition duration-300 ease-in-out 
          focus:outline-none border-b-2 border-b-transparent focus:border-b-blue-500"
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
a;
