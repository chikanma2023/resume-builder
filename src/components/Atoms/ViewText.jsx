const ViewText = ({ icon, title, subTitle, duration, description }) => {
  return (
    <section className="flex flex-col gap-10 first-letter:capitalize">
      <main className="text-xs flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {icon}
          <b className="capitalize">{title}</b>
        </div>
        <div className="ms-5 first-letter:capitalize">
          <p>{subTitle}</p>
          <p className="capitalize text-neutral-500">{duration}</p>
          <p className="first-letter:capitalize my-2">{description}</p>
        </div>
      </main>
    </section>
  );
};

export default ViewText;
