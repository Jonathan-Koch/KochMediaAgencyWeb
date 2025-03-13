'use client';

import { motion } from "framer-motion";
import { FaUsers, FaChartLine, FaGlobeAmericas, FaUserTie, FaDraftingCompass, FaMixcloud   } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 bg-black">
      <div className="container mx-auto text-center text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          Why Choose Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          With over 10 years of industry expertise, our data-driven strategies and award-winning projects set us apart. We understand both global and European markets, ensuring your business achieves unparalleled growth.
        </motion.p>

        {/* Reasons with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Expert Team */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaUsers />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-300">
                A dedicated team of professionals with decades of combined experience. We bring expertise to every aspect of your project.
              </p>
            </div>
          </motion.div>

          {/* Data-Driven */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaChartLine />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Data-Driven</h3>
              <p className="text-gray-300">
                Our strategies are rooted in data and analytics to deliver measurable, results-driven outcomes for your business.
              </p>
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaGlobeAmericas />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Proven Expertise</h3>
              <p className="text-gray-300">
              Over a decade of experience in digital marketing, development, and cybersecurity.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaUserTie />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Client-Centric Approach</h3>
              <p className="text-gray-300">
              Tailored solutions that meet the unique needs of your business.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaDraftingCompass  />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
              <p className="text-gray-300">
              Leveraging the latest technologies and trends to stay ahead of the competition.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center space-x-6"
          >
            <div className="text-5xl text-white">
              <FaMixcloud  />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Transparent Communication</h3>
              <p className="text-gray-300">
              Collaborative process with clear milestones and measurable results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <hr className="border-t border-gray-600 opacity-50 w-3/6 mx-auto mt-16" />
    </section>
  );
}

export default WhyChooseUs;
