'use client';

import { motion } from 'framer-motion';
import { FiChevronRight, FiMenu, FiX } from 'react-icons/fi'; 
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navItems = [
    { name: 'Home', path: '/homeMain' },
    { name: 'About', path: '/aboutUsMain' },
    { name: 'Services', path: '/servicesMain' },
    { name: 'Work', path: '/workMain' },
    { name: 'Blog', path: '/blogMain' },
    { name: 'Contact', path: '/contactMain' },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <Link href="/">
            <Image
              src="/logo-koch.svg"
              alt="Koch Media Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </motion.div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" /> // Close icon
            ) : (
              <FiMenu className="w-6 h-6" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop Only) */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05, color: '#9333ea' }}
              >
                <Link
                  href={item.path}
                  className={`cursor-pointer transition-colors ${
                    isActive
                      ? 'text-[#2563EB] font-semibold'
                      : 'text-white hover:text-[#2563EB]'
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05, color: '#9333ea' }}
                >
                  <Link
                    href={item.path}
                    className={`cursor-pointer transition-colors ${
                      isActive
                        ? 'text-[#2563EB] font-semibold'
                        : 'text-white hover:text-[#2563EB]'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
