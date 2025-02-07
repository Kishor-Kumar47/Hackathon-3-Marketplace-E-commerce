// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { MdChair } from "react-icons/md";
// import { MdManageAccounts, MdOutlineShoppingCart } from "react-icons/md";
// import { CiSearch, CiHeart } from "react-icons/ci";
// import { TbMenu4 } from "react-icons/tb";
// import { GiCrossedSabres } from "react-icons/gi";
// import ShoppingCart from "./CartToggle";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


// const Navbarr = (props:any) => {
//   const [isClick, setisClick] = useState(false);

//   const toggleNavbar = (): void => {
//     setisClick(!isClick);
//   };

//   return (
//     <main>
//       <header className={`text-gray-600 ${props.bgColor} body-font `}>
        
//         <div className="container mx-auto flex flex-wrap   p-5 flex-col md:flex-row items-center justify-between  ">
          
//           <Link
//             href={"/"}
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <MdChair className="w-10 h-10 text-orange-300 p-2 bg-gray-500 rounded-t-full" />

//             <span className="ml-3 text-xl">Comfurt wala</span>
//           </Link>
//           <nav className="hidden md:block md:ml-auto flex flex-wrap md:space-x-14 md:mr-16 items-center text-base justify-center">
//             <Link href={"/"} className="mr-5 hover:text-gray-900">
//               Home
//             </Link>
//             <Link href={"/shop"} className="mr-5 hover:text-gray-900">
//               Shop
//             </Link>
//             <Link href={"/contact"} className="mr-5 hover:text-gray-900">
//               Contact
//             </Link>
//           </nav>

//           <div className="hidden md:block">
//             <div className=" w-[70%] sm:w-[247px] h-[28px] top-[36px] left-[1093px] flex gap-x-10">
//               <span className=" hidden md:block w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]">
//                 {" "}
//                 <Link href={"/searchbar"}>
//                   {" "}
//                   <CiSearch />
                  
//                 </Link>{" "}
//               </span>
              
//               <span className=" hidden md:block w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]">
//                 {" "}
//                 <Link href={"/viewcart"}>
//                   {" "}
//                   <CiHeart />{" "}
//                 </Link>{" "}
//               </span>
//               {/* <span className=" invisible xs:visible w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]"> */}
//                 {" "}
//                 {/* <Link href={"/cart"}> */}
//                 <div className="flex items-center z-10">
//                         <ShoppingCart />
                        
//                     </div>
//                     {/* signIn  */}
//                     <span className="-ml-7 mt-1">

//                     <SignedIn >
//                       <UserButton/>
//                     </SignedIn>
//                     </span>
//                     {/* not sign in  */}
//                     <SignedOut>
//                       <SignInButton >
//                       <p className="-ml-7 text-black mt-2 cursor-pointer">SigIn</p>
                      
//                       </SignInButton>
//                     </SignedOut>
                   
//                   {" "}
//                   {/* <MdOutlineShoppingCart />{" "} */}
//                 {/* </Link>{" "} */}
//               {/* </span> */}
//             </div>
//           </div>
//           {/* menu button  */}
//           <div className="md:hidden flex items-center  w-8 -mr-[260px] -mt-[50px] md:-ml-0 md:-mr-0">
          
//             <button
//               className="inline-flex items-center justify-center text-2xl p-2  rounded-md text-black  hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               onClick={toggleNavbar}
//             >
              
//               {isClick ? <GiCrossedSabres /> : <TbMenu4 />}
//             </button>
//           </div>
//         </div>
//         {isClick && (
//           <div className=" md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
//               <Link href={"/"} className="mr-5 block hover:text-gray-900">
//                 Home
//               </Link>
//               <Link href={"/shop"} className="mr-5 block hover:text-gray-900">
//                 Shop
//               </Link>
//               <Link href={"/contact"} className="mr-5 block hover:text-gray-900">
//                 Contact
//               </Link>
//               <div className="flex gap-4 text-xl">
//               <Link href={"/myaccount"}>
//                   {" "}
//                   <MdManageAccounts />{" "}
//                 </Link>{" "}
//                 <Link href={"/checkouts"} className="">
//                   {" "}
//                   <CiHeart />{" "}
//                 </Link>{" "}
                
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </main>
//   );
// };

// export default Navbarr;




























































"use client";

import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MdChair } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { CiSearch, CiHeart } from "react-icons/ci";
import { TbMenu4 } from "react-icons/tb";
import { GiCrossedSabres } from "react-icons/gi";
import ShoppingCart from "./CartToggle";

// Dynamically import Clerk components
const SignedIn = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedIn), { ssr: false });
const SignedOut = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignedOut), { ssr: false });
const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false });
const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton), { ssr: false });

import { useUser } from "@clerk/nextjs";

const Navbarr = (props: any) => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main>
      <header className={`text-gray-600 ${props.bgColor} body-font`}>
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-gray-900">
            <MdChair className="w-10 h-10 text-orange-300 p-2 bg-gray-500 rounded-t-full" />
            <span className="ml-3 text-xl font-semibold">Comfurt Wala</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-900">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
            <Link href="/dashboard" className="hover:text-gray-900">
              Dashboard
            </Link>
          </nav>

          {/* Icons and Auth Section */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/searchbar" className="text-4xl text-black">
              <CiSearch />
            </Link>
            <Link href="/viewcart" className="text-4xl text-black">
              <CiHeart />
            </Link>
            <ShoppingCart />
            {/* <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <p className="cursor-pointer text-black hover:underline">Sign In</p>
              </SignInButton>
              
            </SignedOut> */}

{isSignedIn ? (
                <div className="  flex flex-col justify-right">
                  <UserButton />
                </div>
              ) : (
                <span className="">
                  <Link
                    href={"/sign-in"}
                    className="mr-5 block -ml-2 text-[16px] hover:text-gray-900"
                  >
                    Signin
                  </Link>
                </span>
              )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <GiCrossedSabres /> : <TbMenu4 />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-900">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
              <div className="flex items-center justify-between space-x-2 text-xl">
              {isSignedIn ? (
                <div className="  flex flex-col  justify-right mt-4">
                  <UserButton />
                </div>
              ) : (
                <span className="">
                  <Link
                    href={"/sign-in"}
                    className="mr-5 block -ml-2 text-[16px] hover:text-gray-900"
                  >
                    Signin
                  </Link>
                </span>
              )}
                <Link href="/checkouts" className="text-2xl text-black">
                  <CiHeart className="text-4xl mt-3" />
                </Link>
                <ShoppingCart  />
              </div>
              


            </nav>
          </div>
        )}
      </header>
    </main>
  );
};

export default Navbarr;
