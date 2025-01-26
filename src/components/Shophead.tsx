

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Shophead = (props: { headText: string; linkChange: string }) => {
  return (
    <main
      className="relative flex items-center justify-center w-full h-[200px] md:h-[316px] bg-cover bg-center mb-9"
      style={{ backgroundImage: "url('/shop-img.png')" }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <Image
          className="mb-4"
          src={'/shop-logo.png'}
          width={77}
          height={77}
          alt="Shop Logo"
        />
        <h2 className="font-poppins font-medium text-[24px] md:text-[40px] leading-[32px] md:leading-[72px] text-black">
          {props.headText}
        </h2>
        <div className="flex items-center space-x-2 text-[14px] md:text-[16px] font-poppins">
          <Link href="/">
            <p className="font-medium text-black">Home</p>
          </Link>
          <IoIosArrowForward className="text-black" />
          <Link href="/shop">
            <p className="font-light text-black">{props.linkChange}</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Shophead;
