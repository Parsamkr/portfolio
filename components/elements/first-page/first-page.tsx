import styles from "./first-page.module.css";
import Typewriter from "typewriter-effect";
import Slider from "./parts/slider";
import { motion } from "framer-motion";
import { socialMediaData } from "@/data/data";

const FirstPage = () => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.biography__container}>
        <div className={styles.biography}>
          <p>
            {"I'm "}
            <b>Mohammad Parsa Mokhtarpour</b>
          </p>
          <p>A Back-end Developer</p>
          <Typewriter
            component="p"
            options={{
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Experienced in development and maintenance of the server-side of a web application. This includes working with databases, server-side languages and frameworks, and building and maintaining APIs, with a medium foundation in front-end development and UI/UX Design."
                )
                .start();
            }}
          />
        </div>
        <div className={styles.photo}>
          <Slider />
        </div>
      </div>

      <div className={`${styles["social-media"]}`}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className={styles.icons}
        >
          {socialMediaData.map((social) => (
            <motion.a
              variants={item}
              key={social.name}
              href={social.url}
              target="_blank"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
        <a className={styles.email} href="mailto:example@example.com">
          parsa.mokhtarpour98@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
