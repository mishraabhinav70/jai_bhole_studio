import React from "react";
import { motion } from "framer-motion";

function Booking() {
  return (
    <div className="py-16 px-6 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Book a Session</h1>

      <motion.form
        className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border mb-4 rounded-lg"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="w-full p-3 border mb-4 rounded-lg"
        />
        <input
          type="date"
          className="w-full p-3 border mb-4 rounded-lg"
        />
        <select className="w-full p-3 border mb-4 rounded-lg">
          <option>Select Service</option>
          <option>Photography</option>
          <option>Videography</option>
          <option>Editing</option>
        </select>

        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold">
          Book Now
        </button>
      </motion.form>
    </div>
  );
}

export default Booking;
