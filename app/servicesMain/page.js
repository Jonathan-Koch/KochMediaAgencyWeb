"use client";

import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaLinkedin, FaCode, FaLaptopCode, FaChartLine } from 'react-icons/fa'; 
import Navigation from '../navigation';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const services = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. From enterprise applications to mobile apps, we build scalable and secure software that drives efficiency and innovation.",
    icon: <FaCode className="w-16 h-16 text-white mx-auto mb-4" />,
  },
  {
    name: "Website Development",
    description:
      "Stunning, responsive, and user-friendly websites that captivate your audience...",
    icon: <FaLaptopCode className="w-16 h-16 text-white mx-auto mb-4" />,
  },
  {
    name: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies to boost your online presence...",
    icon: <FaChartLine className="w-16 h-16 text-white mx-auto mb-4" />,
  },
];

export default function OurServices() {
  return (
    <>
      <Navigation />
      <section id="services" className="min-h-screen py-12 bg-black">
        {/* Services Hero Section */}
        <div className="container mx-auto text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We offer a wide range of services designed to help your business thrive...
          </motion.p>
        </div>

        {/* Services Grid Section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50 hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300"
              >
                {/* Service Icon */}
                <div className="text-center mb-6">
                  {service.icon}
                </div>

                {/* Service Name */}
                <h3 className="text-2xl font-bold text-white text-center mb-4">
                  {service.name}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-t border-gray-600 opacity-50 w-3/6 mx-auto mt-16" />

        {/* Testimonials Section */}
        <div className="py-20 bg-black">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              What Our Clients Say
            </h2>
            <Testimonials />
          </div>
          <hr className="border-t border-gray-600 opacity-50 w-3/4 mx-auto mt-16" />
        </div>

        {/* Call to Action Section */}
        <div className="py-20 bg-black text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Let’s work together to create something extraordinary...
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#2563EB] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </motion.button>
        </div>

        <Footer />
      </section>
    </>
  );
}
