import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Shophead = (props:any) => {
  return (
    <main
    className=" relative flex items-center justify-center w-full h-[200px] md:h-[316px] md:w-[1347px] bg-instagram-section bg-cover bg-center justify-center mb-9  "
    style={{ backgroundImage: "url('/shop-img.png')" }}
  >
    <div >
        <Image className='top-[161px] left-[682px] mb-[-20px]'
        src={'/shop-logo.png'}
        width={77}
        height={77}
        alt='logo'
        />
        <h2 className='w-[px] h-[72px] top-[221px] left-[658px] font-["Poppins"] font-medium text-[40px] leading-[72px] text-black ' >{props.headText}</h2>
        <span className='[121px] h-[24px] top-[295px] left-[660px] flex items-center'>
            <p className='w-[48px] h-[24px] top-[295px] left-[660px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'> <Link href={'/'}>Home</Link> </p>
            <span className='ml-[-8px]'><IoIosArrowForward/> </span>
            <p className='w-[px] h-[24px] top-[295px] left-[740px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'><Link href={'/shop'}>{props.linkChange}</Link></p>
        </span>
    </div>
  </main>
  )
}

export default Shophead;