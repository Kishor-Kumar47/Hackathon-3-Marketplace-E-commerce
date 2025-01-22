import Link from 'next/link';
import React from 'react';
import { MdChair } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 body-font">
      <div className="container mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About Section */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center text-white text-2xl font-semibold">
            <MdChair className="w-10 h-10 text-orange-500 p-2 bg-gray-700 rounded-full" />
            <span className="ml-3">Comfurt Wala</span>
          </Link>
          <p className="text-sm text-gray-400">
            Modern furniture for your home. Discover the perfect blend of style and comfort.
          </p>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <h3 className="text-lg text-white font-medium">Categories</h3>
          <nav className="list-none space-y-2">
            <li>
              <Link href="/categories/living-room" className="hover:text-orange-500">
                Living Room
              </Link>
            </li>
            <li>
              <Link href="/categories/bedroom" className="hover:text-orange-500">
                Bedroom
              </Link>
            </li>
            <li>
              <Link href="/categories/dining-room" className="hover:text-orange-500">
                Dining Room
              </Link>
            </li>
            <li>
              <Link href="/categories/office" className="hover:text-orange-500">
                Office
              </Link>
            </li>
            <li>
              <Link href="/categories/outdoor" className="hover:text-orange-500">
                Outdoor
              </Link>
            </li>
          </nav>
        </div>

        {/* Basic Categories Section */}
        <div className="space-y-4">
          <h3 className="text-lg text-white font-medium">Basic Categories</h3>
          <nav className="list-none space-y-2">
            <li>
              <Link href="/categories/beds" className="hover:text-orange-500">
                Beds
              </Link>
            </li>
            <li>
              <Link href="/categories/sofas" className="hover:text-orange-500">
                Sofas
              </Link>
            </li>
            <li>
              <Link href="/categories/chairs" className="hover:text-orange-500">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/categories/tables" className="hover:text-orange-500">
                Tables
              </Link>
            </li>
            <li>
              <Link href="/categories/accessories" className="hover:text-orange-500">
                Accessories
              </Link>
            </li>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-lg text-white font-medium">Contact Us</h3>
          <p className="text-sm text-gray-400">
            123 Furniture St, Design City, HomeState 45678
          </p>
          <p className="text-sm text-gray-400">Email: support@comfurtwala.com</p>
          <p className="text-sm text-gray-400">Phone: +1 (234) 567-890</p>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" className="hover:text-orange-500">
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" className="hover:text-orange-500">
              <FaTwitter />
            </Link>
            <Link href="https://instagram.com" className="hover:text-orange-500">
              <FaInstagram />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-orange-500">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Comfurt Wala. All Rights Reserved.</p>
          <nav className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-orange-500">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
