import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="py-16 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <motion.form
        className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border mb-4 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border mb-4 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border mb-4 rounded-lg h-32"
        ></textarea>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold">
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
