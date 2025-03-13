import { HERO_CONTENT } from "../constants";
// Profile image is served from public directory
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Harsh Ladani
            </motion.h2>
            <div className="flex flex-col gap-2">
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Full-Stack Developer &
              </motion.span>
              <motion.span
                variants={container(0.7)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Machine Learning Enthusiast
              </motion.span>
            </div>
            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 space-y-4 font-light tracking-tighter"
            >
              {HERO_CONTENT.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="/HL_profile.JPG"
              alt="Harsh Ladani"
              className="mask-image rounded-2xl w-2/3"
              style={{
                maskImage: 'linear-gradient(to top, transparent 5%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
