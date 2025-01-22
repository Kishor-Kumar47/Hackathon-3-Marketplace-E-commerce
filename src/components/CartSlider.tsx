import { useState } from "react";

const CartSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to Open Cart */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-black text-white p-2 rounded-full"
      >
        🛒
      </button>

      {/* Cart Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/sofa.jpg" // Replace with your image path
              alt="Asgaard Sofa"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="text-sm font-medium">Asgaard Sofa</h3>
              <p className="text-sm text-gray-500">1 x Rs. 250,000.00</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold">Subtotal:</span>
            <span className="text-lg font-bold">Rs. 250,000.00</span>
          </div>
          <button className="w-full bg-black text-white py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;
