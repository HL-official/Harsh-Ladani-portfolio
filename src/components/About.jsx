import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 scroll-mt-20">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <motion.img
              className="rounded-2xl w-2/3"
              src="/HL_work.jpg"
              alt="Harsh at work"
              style={{
                maskImage: 'linear-gradient(to top, transparent 5%, black 25%)',
                WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 25%)'
              }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="space-y-8 max-w-xl py-6">
              {Object.values(ABOUT_TEXT).map((section, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-light tracking-tight text-neutral-400">
                    {section.title}
                  </h3>
                  <p className="font-light tracking-tighter">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
