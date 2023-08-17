import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I'm Familiar With</p>
        <h2 className={styles.sectionHeadText}>Technology Stack.</h2>
      </motion.div>
      <div className="flex items-center justify-center mt-20">
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-[0px] animate-1 ">
            {technologies.map(({ icon, name, link }, index) => {
              if (index < 10) {
                return (
                  <a
                    className="flex justify-center items-center w-[20rem] cursor-pointer h-[100%]"
                    key={icon}
                    href={link}
                    target="_blank"
                    title={name}
                  >
                    <img src={icon} className="w-[70%]" />
                  </a>
                );
              }
            })}
            {technologies.map(({ icon, name, link }, index) => {
              if (index < 10) {
                return (
                  <a
                    className="flex justify-center items-center w-[20rem] cursor-pointer h-[100%]"
                    key={icon}
                    href={link}
                    target="_blank"
                    title={name}
                  >
                    <img src={icon} className="w-[70%]" />
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <div className="w-[200%] h-20 border-t border-b border-gray-600 overflow-hidden relative">
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-[0px] animate-2 ">
            {technologies.map(({ icon, name, link }, index) => {
              if (index > 9) {
                return (
                  <a
                    className="flex justify-center items-center w-[20rem] cursor-pointer h-[100%]"
                    key={icon}
                    href={link}
                    target="_blank"
                    title={name}
                  >
                    <img src={icon} className="w-[70%]" />
                  </a>
                );
              }
            })}
            {technologies.map(({ icon, name, link }, index) => {
              if (index > 9) {
                return (
                  <a
                    className="flex justify-center items-center w-[20rem] cursor-pointer h-[100%]"
                    key={icon}
                    href={link}
                    target="_blank"
                    title={name}
                  >
                    <img src={icon} className="w-[70%]" />
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
