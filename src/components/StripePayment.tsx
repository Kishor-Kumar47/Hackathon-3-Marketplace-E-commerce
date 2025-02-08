// "use client"


// import convertToSubCurrency from '@/app/lib/convertToSubCurrency';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import Checkout from './Checkout';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/store';
// import Navbarr from './Navbar';

// if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
//     throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined')
// }

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const StripePayment = () => {
//     const dispatch = useDispatch();

//     const cartItems = useSelector((state: RootState) => state.cart.items);
//       const totalQuantity = cartItems.reduce((total, item)=> total + item.quantity, 0)
  
//       // total price
  
//       const totalPrice = cartItems.reduce((total, item)=>total + item.price * item.quantity,0).toFixed(2);
  
//       // vat (15%)
//       const vat = (+totalPrice * 0.15).toFixed(2);
  
//       //total price with vat
//       const totalPriceVat = (+totalPrice + +vat).toFixed(2);

      
//     const amount:any= totalPriceVat;
//     return (
//         <div>
//             <Navbarr bgColor='bg-white'/>
//             <h1 className='text-sm font-semibold md:text-6xl font-bold text-center'>You are paying Rs: {amount} to Comfurt Wala</h1>

//             <Elements
//                 stripe={stripePromise}
//                 options={{
//                     mode: 'payment',
//                     amount: convertToSubCurrency(amount),
//                     currency: 'usd'
//                 }}
//             >
//                 <Checkout amount={amount} />
//             </Elements>

//         </div>
//     )
// }

// export default StripePayment




////////////////////////////////////


"use client";

import convertToSubCurrency from '@/app/lib/convertToSubCurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Navbarr from './Navbar';

// ✅ Ensure the key is defined before calling loadStripe
const stripePromise = 
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    : null;

const StripePayment = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    // ✅ Ensure amounts are numbers, not strings
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const vat = totalPrice * 0.15;
    const totalPriceVat = totalPrice + vat;

    // ✅ Convert amount to integer cents for Stripe
    const amount = Math.round(totalPriceVat * 100); 

    return (
        <div>
            <Navbarr bgColor='bg-white'/>
            <h1 className='text-sm font-semibold md:text-6xl font-bold text-center'>
                You are paying Rs: {(totalPriceVat).toFixed(2)} to Comfurt Wala
            </h1>

            {stripePromise && (
                <Elements stripe={stripePromise} options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount), // ✅ Pass converted amount correctly
                    currency: 'usd'
                }}>
                    <Checkout amount={amount} />
                </Elements>
            )}
        </div>
    );
};

export default StripePayment;
