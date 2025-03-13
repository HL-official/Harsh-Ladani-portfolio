import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-800 pb-16 scroll-mt-20">
      <h2 className="my-20 text-center text-4xl">
        Education
        <span className="text-neutral-500"> & Achievements</span>
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <div className="flex items-center gap-6">
          <motion.img
            src={EDUCATION.logo}
            alt="PSU Logo"
            width={60}
            height={60}
            className="rounded object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <div>
            <h3 className="text-xl font-semibold tracking-tighter">
              {EDUCATION.university}
            </h3>
            <p className="mt-1 text-neutral-400 tracking-tight">
              {EDUCATION.degree} | {EDUCATION.duration}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 space-y-4"
        >
          {EDUCATION.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-100" />
              <p className="text-neutral-400 tracking-tight">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
