import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

// eslint-disable-next-line react-refresh/only-export-components
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
        Hello, I am a frontend developer with experience in JavaScript, React,
        Node.js, Three.js, and Tailwind CSS. I have also worked on a project
        with Vue. I am passionate about creating engaging and interactive web
        applications. With a strong focus on user experience and attention to
        detail, I strive to deliver high-quality code and innovative solutions.
        I am constantly expanding my knowledge and staying up-to-date with the
        latest industry trends. I am excited about the opportunity to contribute
        to challenging projects and collaborate with a dynamic team. Let&apos;s
        create amazing experiences together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
