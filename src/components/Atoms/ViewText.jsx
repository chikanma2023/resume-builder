const ViewText = ({ icon, title, subTitle, duration, description }) => {
  return (
    <div className="flex flex-col gap-10 first-letter:capitalize">
      <div className="text-xs flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {icon}
          <b className="capitalize">{title}</b>
        </div>
        <div className="ms-5 first-letter:capitalize">
          <div className="capitalize">{subTitle}</div>
          <div className="capitalize text-neutral-500">{duration}</div>
          <div className="first-letter:capitalize my-2">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ViewText;
