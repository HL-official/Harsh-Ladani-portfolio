import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  return (
    <div id="projects" className="relative border-b border-neutral-800 pb-16 scroll-mt-20">
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black bg-opacity-90 p-4 backdrop-blur-sm"
          >
            <motion.img
              src={expandedImage}
              alt="Expanded project"
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl ring-1 ring-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <h2 className="my-20 text-center text-4xl">
        Projects
        <span className="text-neutral-500"> & Research</span>
      </h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <div className="flex items-center justify-center">
                <img
                  src={project.image}
                  width={180}
                  height={180}
                  alt={project.title}
                  onClick={() => setExpandedImage(project.image)}
                  className="mb-6 cursor-zoom-in rounded-lg object-cover shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="mb-3 flex items-center gap-3">
                <h6 className="text-xl font-semibold tracking-tighter">{project.title}</h6>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-neutral-400 transition-all duration-200 hover:scale-110 hover:text-purple-100"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              <p className="mb-6 leading-relaxed text-neutral-400 tracking-tight">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2.5 py-1 text-xs font-medium tracking-wide text-purple-100 transition-colors duration-200 hover:bg-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
