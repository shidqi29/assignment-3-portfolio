import { skills } from "../constant";

const Skills = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4">
      <div className="w-full px-10">
        <h1 className="my-2 text-4xl font-bold text-primary">🦸‍♂️ Skills</h1>
        <hr />
      </div>
      <div className="w-full px-4 py-10">
        <ul className="flex flex-wrap justify-center gap-5 ">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex border-2 border-secondary p-6 shadow-md shadow-secondary transition hover:scale-110 hover:text-accent"
              title={skill.name}
            >
              <div className="flex w-20 flex-col items-center">
                {skill.icon}
                {skill.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
