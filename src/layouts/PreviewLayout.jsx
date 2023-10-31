const PreviewLayout = ({ icon, title, subTitle, duration, description }) => {
  return (
    <section className="flex flex-col gap-10 first-letter:capitalize">
      <main className="text-xs flex flex-col gap-1">
        <div className="flex items-center gap-3">
          {icon}
          <b className="capitalize">{title}</b>
        </div>
        <div className="ms-8 first-letter:capitalize">
          <p className="text-neutral-700">{subTitle}</p>
          <p className="text-neutral-400">{duration}</p>
          <p className="first-letter:capitalize text-neutral-700 my-2">
            {description}
          </p>
        </div>
      </main>
    </section>
  );
};

export default PreviewLayout;
