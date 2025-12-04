import React from "react";

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Jai Bhole Studio
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-6">
            Professional photography, videography & creative editing services.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 text-lg bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
              Book Now
            </button>

            <button className="px-6 py-3 text-lg border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-gray-600">
                Wedding, portfolio, event & product shoots.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Videography</h3>
              <p className="text-gray-600">
                Cinematic shoots, events, ads & music videos.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Editing</h3>
              <p className="text-gray-600">
                Professional photo & video editing with premium effects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Jai Bhole Studio is dedicated to capturing your best moments with
            creativity and professionalism. With years of experience, we deliver
            high-quality results that you’ll cherish forever.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
