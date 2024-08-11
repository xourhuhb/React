const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-evenly">
      {Array.from({ length: 10 }).map((_, idx) => (
        <div key={idx} className="w-48 p-2.5">
          <div className="w-full h-48 mt-12 rounded-lg bg-gray-200"></div>
          <div className="w-3/5 mt-2.5 h-2.5 rounded-lg bg-gray-100"></div>
          <div className="w-3/5 mt-2.5 h-2.5 rounded-lg bg-gray-100"></div>
          <div className="w-9/10 mt-2.5 h-2.5 rounded-lg bg-gray-100"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
