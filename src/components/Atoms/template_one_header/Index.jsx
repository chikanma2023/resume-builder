const Index = ({ data }) => {
  if (!data) return;

  return (
    <div className="flex gap-5 text-xs [&_b]:capitalize [&_*]:first-letter:capitalize">
      <div className="w-1/3 space-y-1 [&_p]:text-neutral-500">
        <b>{data.jobTitle}</b>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p className="capitalize my-2">
          {data.city} {data && data.city && ","} {data.country}
        </p>
      </div>
      <div className="w-2/3">
        <p className="capitalize mb-4 text-3xl font-bold">
          {data.firstname} {data.lastname}
        </p>
        <div
          className={data.summary ? "bg-neutral-100 rounded-2xl p-3" : "hidden"}
        >
          <b className="text-[1.5em]">profile</b>
          <p
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Index;
