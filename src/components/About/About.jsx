import { motion } from "framer-motion";

import { styles } from "@/styles";
import { fadeIn, textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a passionate developer dedicated to transforming ideas into
        interactive and high-performance web applications. With a solid
        foundation in JavaScript and extensive experience with modern
        frameworks, I specialize in crafting seamless and intuitive user
        experiences. I thrive on delivering functional and visually engaging
        solutions that drive real-world impact. Continuously learning and
        embracing new challenges, I’m always excited to collaborate with teams
        to bring bold, innovative ideas to life. Let’s create something
        extraordinary together.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
