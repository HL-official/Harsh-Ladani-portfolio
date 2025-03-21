import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div id="contact" className="border-b border-neutral-900 pb-20 scroll-mt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold mb-8">Harsh Ladani</h3>
          <div className="space-y-6 text-lg">
            <p>{CONTACT.address}</p>
            <p>{CONTACT.phoneNo}</p>
            <a 
              href={`mailto:${CONTACT.email}`} 
              className="inline-block hover:text-white transition-colors"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
