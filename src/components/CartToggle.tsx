// 'use client'
// import React, { useState } from 'react';
// import { AiOutlineShoppingCart } from 'react-icons/ai';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import { removeFromCart } from '../../store/cartSlice';




// function ShoppingCart() {
//     // State to toggle cart visibility
//     const [isCartVisible, setIsCartVisible] = useState(false);

    

//     const cartItems = useSelector((state: RootState) => state.cart.items);
//     const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
    
//     const toggleCart = () => {
//         setIsCartVisible(!isCartVisible);
//     };

//     return (
//         <div className="relative">
//             {/* Cart Icon */}
//             <button
//                 onClick={toggleCart}
//                 className="text-black p-2 mt-2  rounded relative"
//                 aria-label="Toggle Shopping Cart"
//             >
//                 <AiOutlineShoppingCart aria-label="Shopping Cart" size={30} />
//             </button>

//             {/* Cart Sidebar */}
//             <div
//                 className={`fixed top-0 right-0 h-full bg-slate-400 shadow-lg transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'} sm:w-[400px] md:w-[450px] lg:w-[500px]`}
//             >
//                 <div className="p-4 overflow-y-auto h-full flex flex-col justify-between ">
//                     <div>
//                         <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//                         <hr />
//                         {cartItems.length == 0 && (
//                             <div className='flex items-center w-full justify-center'>
//                                 <h2 className='text-xl text-gray-600 font-blod'>Cart is Empity</h2>
//                             </div>
//                         )}

//                         {cartItems.length > 0 && (
//                             <div>
//                                 {cartItems?.map((item)=>{
//                                     return(
//                                         <div key={item.id} className="space-y-4 bg-white rounded-md">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex items-center">
//                                     <Image
//                                         src={item.image}
//                                         height={100}
//                                         width={100}
//                                         alt={item.name}
//                                         className="object-cover h-20 rounded-md"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="mt-8 font-medium">{item.name}</h3>
//                                         <p className="my-2">{item.quantity} x <span className="text-yellow-600">{(item.price * item.quantity)}</span></p>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer">
//                                     <button
                                    
//                                     className="p-0.5 text-xl font-medium">x</button>
//                                 </div>
//                             </div>
//                         </div>
//                                     )
//                                 })}
//                             </div>
//                         )}

//                         {/* Cart Items */}
//                         {/* <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                                 <div className="flex">
//                                     <Image
//                                         src="/shop-pro-9.png"
//                                         height={150}
//                                         width={150}
//                                         alt="Asgaard Sofa"
//                                         className="object-cover"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="mt-8 font-medium">Asgaard Sofa</h3>
//                                         <p className="my-2">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gray-500 h-[30px] w-[30px] text-white rounded-full flex justify-center items-center cursor-pointer">
//                                     <span className="p-0.5 text-xl font-medium">x</span>
//                                 </div>
//                             </div>
//                         </div> */}
//                     </div>

//                     {/* Bottom Section (Subtotal + Buttons) */}
//                     <div className="mt-auto">
//                         <div className="flex justify-between">
//                             <p>Subtotal</p>
//                             <p className="ml-8 my-2">1 x <span className="text-yellow-600">Rs. 250.000.00</span></p>
//                         </div>
//                         <hr />
//                         <div className="mt-4 flex justify-around mx-auto gap-4">
//                             <Link href='/viewcart'>
//                                 <button className="rounded-full text-black hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     View Cart
//                                 </button>
//                             </Link>
//                             <Link href='/checkouts'>
//                                 <button className="rounded-full text-black hover:text-white bg-white hover:bg-gray-800 px-8 py-2 border border-black">
//                                     Checkout
//                                 </button>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Close Cart Button */}
//                 <button
//                     onClick={toggleCart}
//                     className="absolute top-4 right-4 text-red-500 hover:text-gray-700"
//                     aria-label="Close Cart"
//                 >
//                     Close
//                 </button>
//             </div>
//             <span className='absolute top-2 -top-[0.0001mm] -right-1 w-5 h-5 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>
//                 {totalQuantity}
//             </span>

//         </div>
//     );
// }

// export default ShoppingCart;















import { AiOutlineShoppingCart } from 'react-icons/ai';

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import CartSidebar from './helper/CartSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CartToggle = () => {

    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
  return (
    <Sheet>
        <SheetTrigger>
            <div className='relative '>
                <span className='absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full'>
                 {totalQuantity}
                </span>
                <AiOutlineShoppingCart aria-label="Shopping Cart" size={30} />
            </div>
        </SheetTrigger>
        <SheetContent className='overflow-auto'>
            <CartSidebar />
        </SheetContent>
    </Sheet>
  )
}

export default CartToggle