import React from 'react';

const InstagramBanner = () => {
  return (
    <div className="relative bg-gray-50 py-16 flex justify-center items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/insta-bg.png')",
          filter: 'blur(0px)',
          opacity: 1.5,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <button className="bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default InstagramBanner;
