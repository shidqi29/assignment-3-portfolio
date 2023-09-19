import { Link } from "react-router-dom";
import { awards } from "../constant";

const Awards = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-start px-4">
      <div className="w-full px-4 py-4">
        <h1 className="my-2 text-4xl font-bold text-primary">
          🏆 Awards & Certifications
        </h1>
        <hr />
      </div>
      <div className="w-full px-4">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {awards.map((award, index) => (
            <li key={index}>
              <div className="flex h-full w-full flex-col justify-between gap-4 border-2 border-secondary p-4 shadow-md shadow-secondary transition hover:scale-105">
                <div>
                  <h3 className="text-2xl font-bold">{award.name}</h3>
                  <p>{award.company}</p>
                </div>
                <Link
                  to={award.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-max text-accent hover:underline"
                >
                  See Certificate 🡥
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Awards;
