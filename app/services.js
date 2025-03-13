'use client';
import { motion } from 'framer-motion';
import { FaChartLine, FaCode, FaLaptopCode } from 'react-icons/fa';

const services = [
  { 
    title: 'Digital Marketing', 
    description: 'SEO, PPC, Social Media, Content Strategy',
    icon: <FaChartLine className="w-8 h-8 text-white" /> // Digital Marketing icon
  },
  { 
    title: 'Software Development', 
    description: 'Develop Robust Technology to Meet Your Business Logic',
    icon: <FaCode className="w-8 h-8 text-white" /> // Software Development icon
  },
  { 
    title: 'Website Development', 
    description: 'Showcase Who You Are With a Custom Designed Website Using the Latest Technology',
    icon: <FaLaptopCode className="w-8 h-8 text-white" /> // Website Development icon
  },
];

function ServicesOverview() {
  return (
    <div className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl "
            >
              {/* Directly render the icon here */}
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesOverview;
