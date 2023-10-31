const Index = () => {
  return (
    <div className="text-xs">
      <p className="font-bold mb-1">Skills</p>
      <div className="flex flex-col gap-1 uppercase">
        <main className="flex flex-col gap-1">
          <p>javascript</p>
          <div className="w-full h-[2px] bg-blue-500"></div>
        </main>
        <main className="flex flex-col gap-2">
          <p>Css</p>
          <div className="w-full h-[2px] bg-blue-500"></div>
        </main>
        <main className="flex flex-col gap-2">
          <p>html</p>
          <div className="w-full h-[2px] bg-blue-500"></div>
        </main>
      </div>
    </div>
  );
};

export default Index;
