import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ViewCart = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Navbar and Heading */}
      <div>
        <Navbar bgColor="bg-white" />
        <Shophead headText="View Cart" linkChange="Cart" />
      </div>

      {/* Cart Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Cart Items */}
          <div className="w-full md:w-2/3 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Cart</h2>

            {/* Item Example */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
              <div className="flex items-center gap-4">
                <Image
                width={80}
                height={80}
                  src="/shop-pro-9.png"
                  alt="Product"
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-700">Product Name</h3>
                  <p className="text-sm text-gray-500">Category</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <input
                  type="number"
                  className="w-16 p-2 border rounded text-center"
                  defaultValue="1"
                  min="1"
                />
                <p className="text-lg font-semibold text-gray-800">$49.99</p>
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>

            {/* Example Item End */}

            <div className="flex justify-between mt-6">
              <Link href={'/shop'}><button  className="text-gray-600 hover:text-gray-800">Continue Shopping</button></Link>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
                Clear Cart
              </button>
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cart Summary</h2>
            <div className="flex justify-between text-gray-600 mb-4">
              <p>Subtotal</p>
              <p>$49.99</p>
            </div>
            <div className="flex justify-between text-gray-600 mb-4">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-800 mb-6">
              <p>Total</p>
              <p>$49.99</p>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewCart;
