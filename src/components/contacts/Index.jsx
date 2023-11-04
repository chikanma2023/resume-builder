const Index = ({ data }) => {
  return (
    <div className="w-full text-xs">
      <p className="font-bold mb-1">Details</p>
      <div className="flex flex-col gap-1">
        <p className="first-letter:capitalize">{data.city}</p>
        <p className="first-letter:capitalize">{data.country}</p>
        <p className="first-letter:capitalize">{data.phone}</p>
        <p className="break-words text-blue-500">{data.email}</p>
      </div>
    </div>
  );
};

export default Index;
