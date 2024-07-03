import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

interface Tech {
  id: number;
  title: string;
  url: string;
}

const techStack: Tech[] = [
  { id: 0, title: "React.js", url: "https://reactjs.org/" },
  { id: 1, title: "Redux", url: "https://redux-toolkit.js.org/" },
  { id: 2, title: "DummyJson API", url: "https://dummyjson.com/" },
  { id: 3, title: "MongoDB", url: "https://cloud.mongodb.com/" },
  { id: 4, title: "ShadCn", url: "https://ui.shadcn.com/" },
  { id: 5, title: "Tailwindcss", url: "https://tailwindcss.com" },
];

const About: React.FC = () => {
  return (
    <div className="px-2 md:px-10 lg:px-24 text-zinc-300 ease-in-out duration-300">
      <div className="max-w-screen-xl mx-auto py-5 pb-20">
        <div className="xl:text-lg text-base font-normal">
          <Fade top>
            <h3 className="sm:text-2xl text-xl font-semibold border-b-2 border-zinc-400 pb-5 text-white">
              About
            </h3>
          </Fade>
          <div className="flex md:gap-8 md:flex-row flex-col w-full items-center mt-8">
            <div className="mx-auto w-full md:w-1/2 mb-5">
              <Fade left>
                <img
                  src="/assets/programming.svg"
                  alt="Programming Illustration"
                />
              </Fade>
            </div>
            <div className="w-full md:w-1/2 flex-grow ml-auto">
              <Fade right>
                <p className="text-justify">
                  GoShop is an E-commerce website built using
                  {techStack.map((tech, index) => (
                    <span key={tech.id}>
                      <Link
                        to={tech.url}
                        className="underline-offset-4 text-blue-light underline mx-1"
                      >
                        {tech.title}
                      </Link>
                      {index < techStack.length - 1 && ", "}
                    </span>
                  ))}
                  by
                  <span className="font-semibold text-blue-light underline mx-1">
                    <Link to="https://gauravdubey.vercel.app">
                      Gaurav Dubey
                    </Link>
                  </span>
                  to enhance and showcase his development skills.
                </p>
                <p className="mt-4 text-justify">
                  GoShop offers a wide range of products across various
                  categories such as electronics, fashion, home appliances, and
                  more. The platform is designed to provide a seamless shopping
                  experience with features like user-friendly navigation, secure
                  payment gateways, and efficient customer service. GoShop also
                  emphasizes the importance of sustainability by offering
                  eco-friendly products and promoting green practices.
                </p>
                <p className="mt-2">
                  If you want to get in touch, email
                  <Link
                    to="mailto:dubeygaurav520@gmail.com"
                    className="link text-blue-light mx-1 underline"
                  >
                    Email Me
                  </Link>
                  .
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
