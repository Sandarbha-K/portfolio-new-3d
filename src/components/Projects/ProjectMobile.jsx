import React from "react";
import { useSpring} from "@react-spring/web";

const ProjectMobile = () => {
  const imageCount = 4;
  const springConfig = { mass: 5, tension: 350, friction: 40 };
  const imageProps = Array.from({ length: imageCount }, () => {
    const [props, set] = useSpring(() => ({
      xys: [0, 0, 1],
      config: springConfig,
    }));
    return { props, set };
  });


  // Define an array of links corresponding to each image
  const imageLinks = [
    "https://jocular-phoenix-905d4f.netlify.app/",
    "https://firebase-chat-application-5c21v834y-sandarbha-k.vercel.app/",
    "https://sandarbha-google-search.netlify.app/",
    "https://sandarbha-travel-advisor-website.netlify.app/",
    
  ];

  return (
    <div id="projects" className="w-11/12 mx-auto mt-32 mb-40">
      <div className="text-center mb-20">
        <span className="border-b-2 text-4xl pink-text-gradient border-pink-600">
          Projects
        </span>
        <div className="mt-5 text-xl text-neutral-200">
          My Work and Projects
        </div>
      </div>
      <div className="w-11/12 md:w-11/12 mx-auto">
        <div
          className="grid mx-auto gap-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
        >
          {imageProps.map((image, index) => (
            <div
              key={index}
              className="w-full h-[250px] relative"
            >
              <a
                href={imageLinks[index]}
                 target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className='object-cover object-left-top w-full h-full absolute'
                  src={`/project${index+1}.png`}
                  alt=''
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
