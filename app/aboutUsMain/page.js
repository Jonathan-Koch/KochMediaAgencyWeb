"use client";

import { motion } from 'framer-motion';
import { Fainstagram, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Social media icons
import Image from "next/image";
import Navigation from '../navigation';
import Testimonials from '../Testimonials';
import Footer from '../Footer';

const teamMembers = [
  {
    name: "Chayton Koch",
    occupation: "Head of Marketing",
    image: "/chay.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/kochmediaagency?igsh=ajg5c3U3OHZ3azNs",
      facebook: "https://www.facebook.com/share/1CAXXzBtvJ/",
      linkedin: "https://www.linkedin.com/company/kochmediaagency/",
    },
  },
  {
    name: "Jonathan Koch",
    occupation: "Head of Development",
    image: "/johnny.jpg",
    socialMedia: {
      instagram: "https://www.instagram.com/kochmediaagency?igsh=ajg5c3U3OHZ3azNs",
      facebook: "https://www.facebook.com/share/1CAXXzBtvJ/",
      linkedin: "https://www.linkedin.com/company/kochmediaagency/",
    },
  },
];

export default function AboutUSMain() {
  return (
    <>
      <Navigation />
      <section id="about" className="min-h-screen py-12 bg-black">
        {/* Our Story Section */}
        <div className="container mt-10 mx-auto flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-2/3 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">Our Story</h2>
            <div className="text-center">
              <div className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                <p className=''>
                  I started Koch Media Agency after watching too many brilliant businesses get fed generic, cookie-cutter marketing strategies by agencies who couldn’t tell a triathlete from a toddler. (True story: One “expert” tried to sell Hezekiah Creations—a luxury couch cushion brand—an influencer campaign targeting extreme sports moms. Yes, <strong>extreme sports moms</strong>. For <strong>couch cushions</strong>. I wish I were joking.)
                </p>

                <p>
                  Our vision? To <strong>kill lazy marketing</strong>. No jargon. No recycled playbooks. No buzzword bingo. Just strategies so specific, so tailored, they feel like they were built in your boardroom. (Because, honestly, they kind of were.)
                </p>

                <p className='mt-4'>
                  <strong>How do we do it?</strong>
                </p>

                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>We treat your budget like it’s our own. (You’d cry if you saw my first-year profit margins. Spoiler: They were negative.)</li>
                  <li>We obsess over irrational human quirks. Like why a CFO will agonize over a $5K software demo but impulse-buy a $500 cycling jersey. (It’s science. Kind of.)</li>
                  <li>We measure success in boardroom outcomes—leads closed, hours saved, and yes, cushions survived.</li>
                </ul>

                <p>
                  <strong>Our values?</strong> Grit &gt; GPT. Clarity over fluff. And if we wouldn’t bet our rent money on a strategy, we won’t pitch it to you. (And trust me, I like having a roof over my head.)
                </p>

                <p>
                  <strong>TL;DR:</strong> We exist because marketing shouldn’t require a jargon dictionary to understand—or a miracle to work. If you’re tired of being sold snake oil and want results that actually move the needle, you’re in the right place.
                </p>
              </div>

            </div>
            {/* Horizontal Line */}
            <hr className="border-t border-gray-700 w-1/2 mx-auto my-8" />
          </div>
        </div>

        {/* What Our Clients Have To Say Section */}
        <div className="py-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-white">What Our Clients Have To Say</h2>
            <div className="">
              <Testimonials />
            </div>
          </div>
          <hr className="border-t border-gray-600 opacity-50 w-3/4 mx-auto mt-16" />
        </div>

        {/* Meet the Team Section */}
        <div className="py-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Meet the Team</h2>

            {/* Flexbox for centering cards in a row */}
            <div className="flex flex-wrap justify-center gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative w-80 p-6 border border-gray-700 rounded-lg bg-black bg-opacity-50 hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 min-h-[400px] text-center"
                >
                  {/* Team Member Image */}
                  <div className="w-48 h-48 relative mb-6 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Team Member Name */}
                  <h3 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h3>

                  {/* Team Member Occupation */}
                  <p className="text-gray-400 text-center mb-4">{member.occupation}</p>

                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-pink-500 transition"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href={member.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                    <a
                      href={member.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-700 transition-colors"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
