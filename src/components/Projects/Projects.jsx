import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/styles";
import { github, link } from "@/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  technologies,
  image,
  source_code_link,
  public_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className=" relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="flex items-center justify-center w-12 h-12 transform hover:scale-110 transition duration-300 rounded-full cursor-pointer black-gradient"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="object-contain w-1/2 h-1/2"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <a
            href={public_link}
            target="_blank"
            className="flex items-center hover:text-[#915eff] transform hover:scale-110 transition duration-300 text-white font-bold text-[24px]"
          >
            {name}
            <img
              src={link}
              alt="github"
              className="w-6 h-6 inline-block ml-2"
            />
          </a>
          <p className=" mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((technologie) => (
            <p key={technologie.name} className={`text-[14px]`}>
              #{technologie.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex flex-wrap justify-center mt-20 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
