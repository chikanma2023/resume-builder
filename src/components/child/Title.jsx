const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-1 mb-5 z-10">
      <p className="font-bold text-2xl capitalize">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default Title;
