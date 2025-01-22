import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import React from "react";
import { TbPointFilled } from "react-icons/tb";

const CheckoutPage = () => {
  return (
    <main>
      {/* Header */}
      <section>
        <Navbar bgColor="bg-white" />
        <Shophead headText="Check Outs" linkChange="Check" />
      </section>

      {/* Checkout Main */}
      <section className="flex flex-col items-center w-full px-4 py-8 bg-slate-100 ">
        <div className="container flex flex-col md:flex-row gap-8">
          {/* Left Side: Billing Details */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold text-black">Billing Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  className="w-full p-3 border rounded-md"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  className="w-full p-3 border rounded-md"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700">Company Name (Optional)</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-gray-700">Country/Region</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Country"
              />
            </div>

            <div>
              <label className="block text-gray-700">Street Address</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Street Address"
              />
            </div>

            <div>
              <label className="block text-gray-700">Town/City</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="City"
              />
            </div>

            <div>
              <label className="block text-gray-700">Province</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Province"
              />
            </div>

            <div>
              <label className="block text-gray-700">ZIP Code</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="ZIP Code"
              />
            </div>

            <div>
              <label className="block text-gray-700">Phone</label>
              <input
                className="w-full p-3 border rounded-md"
                type="text"
                placeholder="Phone"
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                className="w-full p-3 border rounded-md"
                type="email"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Additional Information</label>
              <textarea
                className="w-full p-3 border rounded-md"
                placeholder="Additional Information"
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-semibold text-black">Order Summary</h2>
              <div className="flex justify-between mt-4">
                <span className="text-gray-700">Asgard Sofa x1</span>
                <span className="text-black">RS 25000.00</span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-black">RS 250000.00</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span className="text-black">Total</span>
                <span className="text-yellow-600">RS 250000.00</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <TbPointFilled className="text-2xl text-black" />
                <span>Direct Bank Transfer</span>
              </div>
              <p className="text-sm text-gray-500">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </p>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="rounded-full" />
                <span>Agree to Terms and Conditions</span>
              </div>

              <button className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section>
        <Delivery />
      </section>
    </main>
  );
};

export default CheckoutPage;
