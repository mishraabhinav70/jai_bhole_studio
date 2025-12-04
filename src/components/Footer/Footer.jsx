import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Jai Bhole Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

