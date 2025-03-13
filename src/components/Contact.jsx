import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
  };

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
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start max-w-6xl mx-auto">
          {/* Contact Information Side */}
          <motion.div 
            className="w-full md:w-5/12"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col justify-center lg:justify-start">
              <h3 className="text-3xl font-semibold mb-8">Harsh Ladani</h3>
              <div className="space-y-6 text-lg tracking-tighter">
                <p>{CONTACT.address}</p>
                <p>{CONTACT.phoneNo}</p>
                <a 
                  href={`mailto:${CONTACT.email}`} 
                  className="block hover:text-white transition-colors"
                >
                  {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full md:w-6/12 space-y-4 p-6 bg-neutral-800/50 rounded-lg"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg bg-neutral-800 border-neutral-700 focus:outline-none focus:border-neutral-500 transition-colors resize-none"
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
