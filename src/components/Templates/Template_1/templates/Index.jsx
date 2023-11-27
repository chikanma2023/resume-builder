export const ProfileImage = ({ data }) => {
  return (
    <div className="flex flex-col gap-10 text-xs mb-4 capitalize">
      <div className="flex items-start gap-3 text-neutral-400 text-sm">
        <div className="w-16 h-14 flex items-center justify-center rounded cursor-pointer bg-gray-100">
          <img
            src={data && data.profileImage}
            className={
              data && data.profileImage ? "w-full h-full rounded" : "hidden"
            }
          />
        </div>
        <div>
          <b className="text-2xl text-black">
            {data && data.firstname} {data && data.lastname}
          </b>
          <p className="text-xs text-gray-400">{data && data.jobTitle}</p>
        </div>
      </div>
    </div>
  );
};

export const Contacts = ({ data, link }) => {
  return (
    <div className="flex flex-col gap-3 w-full text-xs">
      <p className="font-bold mb-1">Details</p>
      <div className="flex flex-col gap-1">
        <p className="first-letter:capitalize">{data.city}</p>
        <p className="first-letter:capitalize">{data.country}</p>
        <p className="first-letter:capitalize">{data.phone}</p>
        <p className="break-words text-blue-500">{data.email}</p>
      </div>

      <div className="[&_p]:text-blue-500">
        <b className="mb-1">Links</b>
        <p>{link.link}</p>
        <p>{link.label}</p>
      </div>
    </div>
  );
};
