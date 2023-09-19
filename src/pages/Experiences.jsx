import { experiences } from "../constant";

const Experiences = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4">
      <div className="w-full py-4">
        <h1 className="my-2 text-4xl font-bold text-primary">🌟 Experiences</h1>
        <hr />
      </div>
      <div className="w-full border border-secondary px-4 py-2 shadow-md shadow-secondary">
        <ul>
          {experiences.map((experience) => (
            <li key={experience.job}>
              <p>
                {experience.date} ({experience.type})
              </p>
              <div className="flex justify-between py-2 text-lg font-bold">
                <h2>{experience.job}</h2>
                <h3>{experience.company}</h3>
              </div>
              <p></p>
              <p className="text-justify">{experience.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
