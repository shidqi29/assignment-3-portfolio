import { interests } from "../constant";

const Interests = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4">
      <div className="w-full px-10">
        <h1 className="my-2 text-4xl font-bold text-primary">🌄 Interest</h1>
        <hr />
      </div>
      <div className="w-full px-10 py-4">
        <p className="mb-4 text-lg tracking-wide">
          Apart from programming, some activities that I like to do are:{" "}
        </p>
        <ul className="flex flex-wrap justify-center gap-5">
          {interests.map((Interest) => (
            <li
              key={Interest.name}
              className="flex border-2 border-secondary p-10 shadow-md shadow-secondary transition hover:scale-110 hover:text-accent"
              title={Interest.name}
            >
              <div className="flex w-20 flex-col items-center gap-4 text-center">
                {Interest.icon}
                {Interest.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Interests;
