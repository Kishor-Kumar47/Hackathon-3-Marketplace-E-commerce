import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import React from "react";

const page = () => {
  return (
    <main>
      {/* Navbar and Header */}
      <header>
        <Navbar bgColor="bg-white" />
        <Shophead headText="My Account" linkChange="My Account" />
      </header>

      {/* Main Content */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-8">
        {/* Login Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl font-semibold">Log In</h2>

          <div className="w-full space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">Username or email address</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter your username or email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <label className="text-sm text-gray-600">Remember me</label>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
              Log In
            </button>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Lost Your Password
            </a>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl font-semibold">Register</h2>

          <div className="w-full space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">Username or email address</label>
              <input
                type="text"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                placeholder="Enter your username or email"
              />
            </div>

            <p className="text-sm text-gray-600">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience
              throughout this website to manage access to your account and for
              other purposes described in our
              <a href="#" className="text-black font-semibold hover:underline">
                {' '}privacy policy.
              </a>
            </p>
          </div>

          <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800">
            Register Now
          </button>
        </div>
      </section>

      {/* Delivery Section */}
      <Delivery />
    </main>
  );
};

export default page;
