import { UserIcon } from "@heroicons/react/24/solid";
const Profile = () => {
  return (
    <section className="flex flex-col gap-10 text-xs">
      <main className="flex items-center gap-3 font-bold capitalize">
        <label
          htmlFor="profileImage"
          className="flex items-center gap-5 cursor-pointer"
        >
          <div className="w-16 h-16 flex items-center justify-center rounded cursor-pointer bg-gray-100">
            <UserIcon className="w-10 h-10 text-gray-400" />
          </div>
          <div className="text-black">
            Hart chikanma justman
            <p className="text-xs text-gray-400 font-semibold">
              frontend web developer
            </p>
          </div>
        </label>
      </main>
      <main className="flex flex-col gap-1">
        <div className="flex gap-3">
          <UserIcon className="w-3 h-3 text-black" />
          <b>Profile</b>
        </div>
        <p className="first-letter:capitalize ms-8">
          a professional web developer
        </p>
      </main>
    </section>
  );
};

export default Profile;
