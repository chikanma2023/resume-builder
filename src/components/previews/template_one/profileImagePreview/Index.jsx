const Index = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default Index;
