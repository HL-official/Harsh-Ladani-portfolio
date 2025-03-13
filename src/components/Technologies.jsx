import { FaJava, FaPython, FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiSpringboot, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiJquery, SiTensorflow } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = {
  languages: [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
    { name: "SQL", icon: BiLogoPostgresql, color: "text-sky-500" },
  ],
  frontend: [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Angular", icon: FaAngular, color: "text-red-600" },
    { name: "jQuery", icon: SiJquery, color: "text-blue-600" },
  ],
  backend: [
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
  ],
  datascience: [
    { name: "PyTorch", icon: SiPytorch, color: "text-orange-500" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
    { name: "scikit-learn", icon: SiScikitlearn, color: "text-orange-600" },
    { name: "pandas", icon: SiPandas, color: "text-blue-600" },
    { name: "numpy", icon: SiNumpy, color: "text-blue-400" },
  ],
};

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800 pb-16 scroll-mt-20">
      <h2 className="my-20 text-center text-4xl">
        Technologies
        <span className="text-neutral-500"> & Skills</span>
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-center text-xl font-light tracking-tight text-neutral-400">
            Programming Languages
          </h3>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {technologies.languages.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div className="group relative" key={tech.name}>
                  <motion.div
                    variants={iconVariants(2 + index * 0.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-lg border-2 border-neutral-800 p-3"
                  >
                    <Icon className={`text-5xl ${tech.color}`} />
                    <div className="absolute -bottom-2 left-1/2 z-10 hidden -translate-x-1/2 transform whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:block">
                      {tech.name}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div>
          <h3 className="mb-4 text-center text-xl font-light tracking-tight text-neutral-400">
            Frameworks & Libraries
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="mb-3 text-center text-lg font-light tracking-tight text-neutral-500">
                Front-End
              </h4>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {technologies.frontend.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div className="group relative" key={tech.name}>
                      <motion.div
                        variants={iconVariants(2 + index * 0.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-lg border-2 border-neutral-800 p-3"
                      >
                        <Icon className={`text-5xl ${tech.color}`} />
                        <div className="absolute -bottom-2 left-1/2 z-10 hidden -translate-x-1/2 transform whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:block">
                          {tech.name}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div>
              <h4 className="mb-3 text-center text-lg font-light tracking-tight text-neutral-500">
                Back-End
              </h4>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {technologies.backend.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div className="group relative" key={tech.name}>
                      <motion.div
                        variants={iconVariants(2 + index * 0.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-lg border-2 border-neutral-800 p-3"
                      >
                        <Icon className={`text-5xl ${tech.color}`} />
                        <div className="absolute -bottom-2 left-1/2 z-10 hidden -translate-x-1/2 transform whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:block">
                          {tech.name}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            <div>
              <h4 className="mb-3 text-center text-lg font-light tracking-tight text-neutral-500">
                Data Science & Machine Learning
              </h4>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-3"
              >
                {technologies.datascience.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div className="group relative" key={tech.name}>
                      <motion.div
                        variants={iconVariants(2 + index * 0.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-lg border-2 border-neutral-800 p-3"
                      >
                        <Icon className={`text-5xl ${tech.color}`} />
                        <div className="absolute -bottom-2 left-1/2 z-10 hidden -translate-x-1/2 transform whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:block">
                          {tech.name}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
