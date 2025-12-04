import React from "react";
import { motion } from "framer-motion";

const images = [
  "/img/gallery1.jpg",
  "/img/gallery2.jpg",
  "/img/gallery3.jpg",
  "/img/gallery4.jpg",
  "/img/gallery5.jpg",
  "/img/gallery6.jpg",
];

function Gallery() {
  return (
    <div className="py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Gallery</h1>

      <div className="grid md:grid-cols-3 gap-6 container mx-auto">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img src={src} alt="gallery" className="w-full h-64 object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
