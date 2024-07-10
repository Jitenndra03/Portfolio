import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
import {HERO_CONTENT} from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay }
  }
});

// const HERO_CONTENT = "Greetings, I'm Jitendra Singh, currently advancing my expertise in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning at Pranveer Singh Institute of Technology. Originating from Kanpur, my academic journey commenced at Guru Har Rai Academy, where I acquired a robust foundation in technology and problem-solving. Recognized for my punctuality, dedication, and pursuit of excellence, I approach every challenge with a strategic mindset and a commitment to achieving optimal outcomes. I am driven by a passion for leveraging AI to solve complex problems and contribute meaningfully to the field of Machine Learning.";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-16 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 px-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jitendra Singh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r px-7 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Tech Enthusiast
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl px-6 py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex justify-center lg:justify-start pr-6 px-6">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              className="rounded-2xl w-full max-w-md"
              alt="Jitendra Singh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
