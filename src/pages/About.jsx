import { Link } from "react-router-dom";
import { socials } from "../constant";

const About = () => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center justify-center gap-4 px-4 md:flex-row">
      <div className="w-full px-4 md:w-2/3">
        <h1 className="my-2 text-4xl font-bold text-primary">👨‍💻 About Me</h1>
        <hr />
        <p className="my-2 text-lg tracking-wide">
          A 7th semester undergraduate student majoring in informatics
          engineering. I am very passionate about Web and Mobile Development.
          With strong curiosity, I like to learn something new in my life,
          especially about Front-End Development.{" "}
        </p>

        <h3 className="my-2 text-2xl font-bold ">Get in touch:</h3>
        <ul className="flex gap-2">
          {socials.map((social) => (
            <li key={social.name} className="w-9">
              <div className="">
                <Link
                  to={social.link}
                  title={social.name}
                  className="transition hover:text-primary"
                >
                  {social.icon}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden w-1/3 sm:flex">
        <img
          src="about-profile.jpg"
          alt=""
          className="h-auto w-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
