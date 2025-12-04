import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <motion.h2
          className="text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jai Bhole Studio
        </motion.h2>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-lg">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md border-t"
        >
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 text-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
