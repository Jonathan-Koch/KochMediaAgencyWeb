"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import Navigation from "../navigation";
import Footer from "../Footer";

export default function Contact() {
    return (
        <>
            <Navigation />
            <section className="min-h-screen bg-black text-gray-300 py-20 px-6">
                <div className="container mx-auto text-center">
                    {/* Hero Section */}
                    <motion.h2
                        className="text-4xl mt-7 md:text-5xl font-bold text-white"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Need help with your brand? Drop us a message and let&apos;s talk!
                    </p>

                    {/* Contact Form & Details Section */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <motion.div
                            className="bg-gray-900 p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold text-white">Send Us a Message</h3>
                            <form className="mt-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg text-white font-semibold hover:opacity-90 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div
                            className="flex flex-col items-center space-y-8"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <FaPhoneAlt className="text-blue-500 text-2xl" />
                                <span className="text-lg text-gray-400">+27 61 167 0311</span>
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                                <FaEnvelope className="text-blue-500 text-2xl" />
                                <span className="text-lg text-gray-400">Info@kochmediaagency.com</span>
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                                <span className="text-lg text-gray-400">Melkbosstrand, Cape Town, South Africa</span>
                            </div>

                            {/* Social Media Links */}
                            <h3 className="text-2xl font-semibold text-white mt-8 text-center">
                                Follow Us
                            </h3>

                            <div className="flex space-x-6 justify-center">
                                <a href="#" className="text-gray-400 hover:text-blue-500 transition">
                                    <FaFacebook className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                                    <FaTwitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition">
                                    <FaInstagram className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
}
