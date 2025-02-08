'use client'
import React from 'react'
import { RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

import { useUser } from '@clerk/nextjs';
import { addToCart, removeFromCart } from '../../../store/cartSlice';
import { MdDelete } from "react-icons/md";
import Navbarr from '@/components/Navbar';

const Page = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)

    // total price

    const totalPrice = cartItems.reduce((total, item)=>total + item.price * item.quantity,0).toFixed(2);

    // vat (15%)
    const vat = (+totalPrice * 0.15).toFixed(2);

    //total price with vat
    const totalPriceVat = (+totalPrice + +vat).toFixed(2);
    



const { user } = useUser();

// add item 
const addItemsHandler = (item: { id: string; name: string; price: number; quantity: number; image: string; category: string })=>{
  dispatch(addToCart(item))
}
// remove item 
const removeItemsHandler = (id: string) => {
  dispatch(removeFromCart(id))
}



  return (
    <div>
      <Navbarr bgColor='bg-white' />
      <div className='mt-8 min-h-[60vh]'>
        {/* if cart is empity  */}
        {cartItems.length == 0 && (
          <div className=' flex items-center w-full h-[80vh] flex-col justify-center'>
            <h1 className='mt-8 text-2xl font-semibold'>Your Cart is empty</h1>
            <Link href='/shop'>
            <button className='px-6 py-2 text-white text-xl bg-orange-500 hover:bg-orange-600 rounded-md mt-8'>
              Shop Now
            </button>
            </Link>
            
          </div>
        )}

        {cartItems.length > 0 && (
          <div className='md:w-4/5 w-[95%] mx-auto grid grid-col-1 xl:grid-cols-6 gap-12'>
            {/* cart items  */}
            <div className='rounded-lg shadow-md overflow-hidden xl:col-span-4 '>
              <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-black bg-green-200'>
                Your Cart ({totalQuantity} Items)
              </h1>
              {cartItems.map((item)=>{
                return(
                  <div key={item.id}>
                    <div className='flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10'>
                      <div>
                        <Image 
                        src={item.image}
                        alt={item.name}
                        width={130}
                        height={120}
                        className='cover w-20'
                        />
                      </div>
                      <div>
                       <h1 className='md:text-xl text-base font-bold text-black'>{item.name}</h1>
                       <h1 className='md:text-lg text-sm font-semibold text-gray-400'>{item.category}</h1>
                       <h1 className='md:text-2xl text-lg font-bold text-green-600'>Rs: {item.price}</h1>
                       <h1 className='md:text-lg text-sm font-semibold text-gray-400'>Quantity : {item.quantity}</h1>
                      </div>
                      {/* <div>
                        <button onClick={()=>{removeItemsHandler(item.id)}} className='text-xl text-white font-semibold px-6 py-2 bg-red-500 hover:bg-red-600 rounded-r-t-md '>-</button>
                        <button onClick={()=>{addItemsHandler(item)}}  className='text-xl text-white font-semibold px-6 py-2 bg-green-500 hover:bg-green-600'>+</button>
                      </div> */}
                      <div>
                        <button onClick={()=>{removeItemsHandler(item.id)}} className='text-orange-400 text-xl'><MdDelete/></button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* summary  */}
            <div className='xl:col-span-2'>
              <div className='bg-indigo-950 sticky m top-[25vh] p-6 rounded-lg'>
                <h1 className='text-center mt-8 mb-8 text-white text-2xl font-semibold'>Summary</h1>
                <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                <div className='flex mt-4 text-xl font-semibold text-white items-center justify-between'>
                  <span>Subtotal</span>
                  <span>Rs: {totalPrice}</span>
                </div>
                <div className='flex mt-4 text-xl font-semibold text-white items-center justify-between'>
                  <span>VAT</span>
                  <span>Rs: {vat}</span>
                </div>
                <div className='flex mt-4 mb-4 text-xl font-semibold text-white items-center justify-between'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
            
                <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                <div className='flex mt-4 mb-3 text-xl font-semibold text-white items-center justify-between'>
                  <span>Total</span>
                  <span>Rs: {totalPriceVat}</span>
                </div>
                {!user && (
                  <Link href={'/sign-in'}>
                    <button className='w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-orange-500'>
                      Sign In to Checkout
                    </button>
                  </Link>
                )}
                {
                  user && (
                    <Link href={'/payment'}>
                     <button className='w-full bg-indigo-900 text-white py-2 rounded-md hover:bg-orange-500'>
                      Paypal
                    </button>
                    </Link>
                  )
                }
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Page