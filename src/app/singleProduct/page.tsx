import Image from 'next/image';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegStarHalfStroke  } from "react-icons/fa6";
import Link from 'next/link';
import Navbar from '@/components/Navbar';


const page = () => {
  return (
    <main className=''>
        <div>
        <Navbar bgColor="bg-white"/>
        </div>
        {/* section----1...................................................... */}
        <section className='flex w-full   md:w-[1363px] md:h-[100px] top-[114px] border border-[2px] border-[#9F9F9F]  items-center gap-9'>
            <div className='w-[82px] h-[24px] top-[152px] left-[99px] flex mx-10 gap-2'>
               <Link href={'/'} > <p className='w-[48px] h-[24px] top-[152] h-[99px] font-["Poppins"] font-normal  text-[16px] leading-[24px] text-[#9F9F9F]'>Home</p></Link>
                <span className='pt-1'> <IoIosArrowForward /> </span>
                <Link href={'/shop'} > <p className='w-[48px] h-[24px] top-[152] h-[99px] font-["Poppins"] font-normal  text-[16px] leading-[24px] text-[#9F9F9F]'>Shop</p></Link>
                <span className='pt-1'> <IoIosArrowForward /> </span>

            </div>
            <div className='w-[142px] h-[37px] top-[145px] left-[312px] text-black border-l-[2px] border-[#9F9F9F] ml-8 flex items-center'>
              <p className='w-[108px] h-[24px] top-[151px] left-[346px] font-["Poppins"] font-normal  text-[16px] leading-[24px] text-black ml-5'>Asgaard sofa</p>
            
            </div>

        </section>
        {/* section----2...................................................... */}
        <section className='w-full md:w-[1363px] md:h-[802px] top-[211px]'>
            <div className='flex flex-col w-[80%] md:flex-row md:w-[1200px] md:h-[730px] top-[246px] left-[99px] mt-10'>
                {/* right side */}
                <div className='flex  flex-col-reverse gap-4 md:flex-row	 w-[100%] md:w-[553px] md:h-[500px] top-[246px] left-[99px] '>
                    {/* right */}
                    <div className='flex gap-3 w-screen md:h-[416px] top-[246px] left-[99px]  md:flex-col space-y-4 '>
                        <span className='w-[76px]  h-[80px] top-[246px] left-[99px] rounded-[10px] mt-4 bg-[#FFF9E5]'>
                            <Image className='top-[253px] left-[95px]'
                            src={'/shop-pro-11.png'}
                            width={83}
                            height={55}
                            alt='img'
                            />

                        </span>
                        <span className='w-[76px] h-[80px] top-[246px] left-[99px] rounded-[10px] bg-[#FFF9E5]'>
                            <Image className='top-[253px] left-[95px]'
                            src={'/mini-1.png'}
                            width={83}
                            height={55}
                            alt='img'
                            />

                        </span>
                        <span className='w-[76px] h-[80px] top-[246px] left-[99px] rounded-[10px] bg-[#FFF9E5]'>
                            <Image className='top-[253px] left-[95px]'
                            src={'/mini-2.png'}
                            width={83}
                            height={55}
                            alt='img'
                            />

                        </span>
                        <span className='w-[76px] h-[80px] top-[246px] left-[99px] rounded-[10px] bg-[#FFF9E5]'>
                            <Image className='top-[253px] left-[95px]'
                            src={'/mini-3.png'}
                            width={83}
                            height={55}
                            alt='img'
                            />

                        </span>

                    </div>
                    {/* left  */}
                    <div className='w-[80%] md:w-[481px] md:h-[500px] top-[246px] left-[171px] ml-10'>
                        <div className=' md:w-[423px] md:h-[500px] top-[246px] left-[206px] rounded-[10px] bg-[#FFF9E5]'>
                            <Image className='top-[324px] left-[171px]'
                            src={'/shop-pro-9.png'}
                            width={481}
                            height={391}
                            alt='img'
                            />

                        </div>

                    </div>
                </div>




                {/* right side */}

                <div className=' w-full md:w-[606.01px] md:h-[730px] top-[246px] left-[734px] ml-10 '>
                    {/* upper side */}
                    <div className='w-full md:w-[600px] md:h-[730px] flex flex-col gap-[20px] '>
                        <h2 className='text-2xl md:w-[260px] h-[63px] top-[246px] left-[735px] font-["Poppins"] font-normal  md:text-[42px] leading-[63px] text-black '>Asgaard sofa</h2>
                        <h2 className='text-2xl md:w-[173x] h-[36px] top-[309px] left-[735px] font-["Poppins"] font-medium  md:text-[24px] leading-[36px] text-[#9F9F9F] '>Rs. 250,000.00</h2>
                        <span className='w-[250px] h-[20px] top-[60px] left-[734px] text-yellow-500 flex'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStarHalfStroke />
                        <span className='w-[4px] h-[25px] ml-5 top-[355px] left-[876] border-[1px] bg-[#9F9F9F] '></span>
                        <p className='w-[125x] h-[20px] top-[360px] left-[898px] font-["Poppins"] font-normal  text-[12px] leading-[19.5px] ml-5 text-[#9F9F9F]'>5 Customer Review</p>

                        </span>
                        <h3 className='md:w-[424px] h-[80px] top-[398px] left-[734px] font-["Poppins"] font-normal  text-[13px] leading-[19.5px] text-black'>
                        Setting the bar as one of the loudest speakers in its class the Kilburn is a compact stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                        </h3>



                    {/* middel side */}
                    <div className=' md:w-[600px] h-[170px] flex flex-col gap-[20px] '>
                        <div className='w-[123px] h-[63px] top-[500px] left-[734px] rounded-[5px] '>
                        <h3 className='w-[27px] h-[21px] top-[500px] left-[734px] font-["Poppins"] font-normal  text-[14px] leading-[21px] text-[#9F9F9F]'>
                        Size
                        </h3>
                        <span className='w-[140] h-[40px] top-[533px] flex gap-4 items-center justify-center'>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px]   '>
                                <p className='w-[6px] h-[20px] font-normal text-[13px] leading-[19.5px] text-black rounded-[5px] bg-[#FBEBB5] px-4 py-4 flex items-center text-center '>L</p>
                            </span>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px]  '>
                                <p className='w-[6px] h-[20px] font-normal text-[13px] leading-[19.5px] text-black rounded-[5px] bg-[#FAF4F4] px-4 py-4 flex items-center  text-center'>XL</p>
                            </span>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px]  '>
                                <p className='w-[6px] h-[20px] font-normal text-[13px] leading-[19.5px] text-black rounded-[5px] bg-[#FAF4F4] px-4 py-4 flex items-center  text-center'>XS</p>
                            </span>

                        </span>

                        </div>
                        <div className='w-[123px] h-[63px] top-[500px] left-[734px] rounded-[5px] '>
                        <h3 className='w-[27px] h-[21px] top-[500px] left-[734px] font-["Poppins"] font-normal  text-[14px] leading-[21px] text-[#9F9F9F]'>
                        Color
                        </h3>
                        <span className='w-[140] h-[40px] top-[533px] flex gap-4 items-center justify-center'>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px] bg-violet-800 rounded-full '></span>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px] bg-black rounded-full '></span>
                            <span className='w-[30px] h-[30px] top-[533px] left-[781px] bg-[#FBEBB5] rounded-full '></span>
                            

                        </span>
                        <div className='flex flex-col  md:flex-row md:w-[400px] h-[80px] gap-5 mt-4'>
                            <div className='w-[123px] h-[64px] top-[676px] left-[735px] rounded-[10px] border-[1px] border-[#9F9F9F] flex gap-5 items-center justify-center text-black'>
                                <span>-</span>
                                <p>1</p>
                                <span>+</span>
                                

                            </div>
                            <div>
                            <button className='w-[80%] md:w-[215px] h-[64px] top-[676px] left-[735px] rounded-[10px] border-[1px] border-[#9F9F9F] flex  items-center justify-center text-black'>
                                Add To Cart

                                </button>
                            </div>

                        </div>

                        </div>
                    </div>


 {/* down side */}

                    <div className='w-[90%] md:w-[600px] h-[123px]  border-t-[2px] border-black mt-[90px] flex gap-5 pt-9'>

                        <ul className='w-[75px] h-[24px] font-normal text-[16px] leading-[24px] text-[#9F9F9F] '>
                            <li>SKU</li>
                            <li>Category</li>
                            <li>Tags</li>
                            <li>Share</li>
                        </ul>
                        <ul className='w-[75px] h-[24px] font-normal text-[16px] leading-[24px] text-[#9F9F9F] '>
                            <li>:</li>
                            <li>:</li>
                            <li>:</li>
                            <li>:</li>
                        </ul>
                        <ul className='w-[197px] h-[24px] font-normal text-[16px] ml-[-30px] leading-[24px] text-[#9F9F9F] '>
                            <li>SS001</li>
                            <li>Safas</li>
                            <li>Sofa, Chair, Home, Shop</li>
    
                        </ul>
                        

                    </div>
                    </div>


                </div>



            </div>

        </section>


        {/* section----3...................................................... */}
        <section className='flex w-full h-[800px] w-[90%] md:w-[1363px] md:h-[777px] top-[1031px] border-[1px] border-[#D9D9D9] flex-col md:items-center gap-10'>
            <div className='flex flex-col w-[80%] md:w-[649px] h-[36px] top-[1079px] left-[396px] '>
                <h3 className=' md:w-[136px] h-[36px] top-[1079px] left-[396px] font-["Poppins"] font-normal  md:text-[24px] leading-[36px] text-black'>Description</h3>
                <h3 className=' md:w-[269px] h-[36px] top-[1079px] left-[585px] font-["Poppins"] font-normal  md:text-[24px] leading-[36px] text-[#9F9F9F]'>Additional Information</h3>
                <h3 className=' md:w-[138px] h-[36px] top-[1079px] left-[907px] font-["Poppins"] font-normal  md:text-[24px] leading-[36px] text-[#9F9F9F]'>Reviews 5</h3>

            </div>
            <div className='flex gap-10 md:w-[1026px] h-[174px] top-[1152px] left-[207px] text-[#9F9F9F] flex-col md:gap-4'>
                <p className='text-[10px] w-[90%] md:w-[1026px] h-[48px] top-[1152px] left-[207px] font-["Poppins"] font-normal  md:text-[16px] leading-[24px] text-[#9F9F9F]' >
                Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className='text-[10px] w-[80%] md:w-[1026px] h-[96px] top-[1230px] left-[207px] font-["Poppins"] font-normal  md:text-[16px] leading-[24px] text-[#9F9F9F]' >
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>

            </div>

            {/* down side  */}

            <div className='flex flex-col gap-4  w-[90%] md:gap-0 md:flex-row md:w-[1239px] h-[348px] top-[1362px] left-[100px] justify-between'>
                <div className='md:w-[605px] h-[348px] top-[1362px] left-[100px] bg-[#FFF9E5]'>
                    <Image
                    src={'/shop-111.png'}
                    width={828}
                    height={551}
                    alt='img'
                    />

                </div>
                <div className='md:w-[605px] h-[348px] top-[1362px] left-[100px] bg-[#FFF9E5]'>
                    <Image
                    src={'/shop-112.png'}
                    width={828}
                    height={551}
                    alt='img'
                    />

                </div>

                
            </div>



        </section>





        {/* section----4...................................................... */}
        <section>


        <main className='w-full md:w-[1363px] h-[777px] top-[1663px] bg-white flex flex-col items-center space-y-[30px]'>
        {/* headings */}
        <div className='flex flex-col items-center text-center '>
            <h2 className='w-[311px] h-[54px] top-[1718px] left-[564px] font-["Poppins"] font-medium text-[36px] leading-[54px] text-black '>Related Products</h2>
            

        </div>



        {/* products sec*/}
    <div className='flex flex-col md:flex-row '>
           {/* products 1*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px]'>
                <Image
                src={'/pick-pro-1.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Trenton modular sofa_3</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 2*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] pt-4 '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]'>
                <Image
                src={'/pick-pro-2.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Granite dining table with dining chair</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black mt-4 '>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 3*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px]'>
                <Image
                src={'/pick-pro-3.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Outdoor bar table and stool</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
           {/* products 4*/}
        <div className='w-[287px] h-[372px] top-[1874px] left-[100px] pt-6  '>
            {/* img  */}
            <div className='w-[287px] h-[287px] top-[1874px] left-[100px] mb-[-20px]'>
                <Image
                src={'/pick-pro-4.png'}
                width={750}
                height={384.46}
                alt='img'
                />

            </div>
            {/* text */}
            <div className='w-[194px] h-[71px] top-[2175px] left-[100px] text-black'>
                <p className='w-[192px] h-[24px] top-[2170px] left-[100px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Plain console with teak mirror</p>
                <h2 className='w-[158px] h-[36px] top-[2210px] left-[100px] font-["Poppins"] font-medium text-[24px] leading-[36px] mt-4 text-black'>Rs. 25,000.00</h2>

            </div>
            

            




        </div>
          
        </div>
        {/* button */}
        <div className='w-[155px] h-[49px] top-[2340px] left-[662px] text-black'>
            <button className='w-[104px] h-[30px] top-[2340px] left-[667px] text-black font-["Poppins"] font-medium text-[20px] leading-[30px] '>View More</button>
        <div className='w-[115px] top-[2389px] left-[662px] border border-[2px] border-black'></div>
        </div>

    </main>
            
        </section>
        
    </main>
  )
}

export default page