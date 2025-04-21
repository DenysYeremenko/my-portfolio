import React from "react";
import { technologies } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/styles";

const TechCarousel = ({ items, animationClass }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
        <div
          className={`w-[200%] flex h-full items-center justify-around absolute left-0 ${animationClass}`}
        >
          {items.map(({ icon, name, link }, index) => (
            <a
              className="flex justify-center transform hover:scale-110 transition duration-300 items-center w-[20rem] cursor-pointer h-full"
              key={`${name}-${index}`}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
            >
              <img src={icon} className="w-[70%]" alt={name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  const firstBatch = technologies.slice(0, 10);
  const secondBatch = technologies.slice(10);

  return (
    <>
      <motion.div className="mb-4" variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I'm Familiar With</p>
        <h2 className={styles.sectionHeadText}>Technology Stack.</h2>
      </motion.div>

      <TechCarousel
        items={[...firstBatch, ...firstBatch]}
        animationClass="animate-1"
      />
      <TechCarousel
        items={[...secondBatch, ...secondBatch]}
        animationClass="animate-2"
      />
    </>
  );
};

export default SectionWrapper(Tech, "");
