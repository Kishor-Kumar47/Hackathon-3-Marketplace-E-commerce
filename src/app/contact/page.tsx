import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import Link from "next/link";
import React from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";




const page = () => {
  return (
    <main>
      {/* heading */}
      <div>
      <Navbar bgColor="bg-white"/>
        <Shophead headText="Contact" linkChange="Contact" />
      </div>

      {/* contact info */}
      <div className="flex flex-col gap-10 md:gap-1  w-full h-[1400px] md:w-[1347px] md:h-[1144px] top-[416px]   ">
        <div>
          {/* headings */}
          <div className="flex  h-[170px] flex-col items-center text-center ">
            <h2 className='w-[375px] h-[54px] top-[514px] left-[533px] font-["Poppins"] font-medium text-[36px] leading-[54px] text-black '>
              Get In Touch With Us
            </h2>
            <p className='w-[90%]  md:w-[644px] h-[48px] top-[575px] left-[398px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
        </div>

        <div className="flex flex-col pl-5  w-[99%]   md:flex-row md:w-[1058px] md:h-[800px] top-[637px] left-[191px] md:items-center justify-around    ">
          {/* left side  */}
          <div className="md:w-[393px] md:h-[537px] top-[705px] left-[191px] flex flex-col gap-8">
            <div className="">
              <div className="flex items-center gap-5">
                <span className="ml-[-45px] text-xl">
                  <FaLocationDot />
                </span>
                <h2 className="w-[99px] h-[36px] top-[763px] left-[297px] font-['Poppins'] font-medium text-[24px] leading-[36px] text-black">
                  Address
                </h2>
              </div>
              <h3 className="w-[212px] h-[72px] top-[799px] left-[297px] font-['Poppins'] font-normal text-[16px] leading-[24px] text-black">
                236 5th SE Avenue, New York NY10000, United States
              </h3>
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <span className="ml-[-45px] text-xl">
                  <FaPhone />
                </span>
                <h2 className="w-[99px] h-[36px] top-[763px] left-[297px] font-['Poppins'] font-medium text-[24px] leading-[36px] text-black">
                  Phone
                </h2>
              </div>
              <h3 className="w-[212px] h-[48px] top-[949px] left-[297px] font-['Poppins'] font-normal text-[16px] leading-[24px] text-black">
                Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
              </h3>
            </div>
            <div className="">
              <div className="flex items-center gap-5">
                <span className="ml-[-45px] text-2xl">
                  <IoTime />
                </span>
                <h2 className="w-[166px] h-[36px] top-[1039px] left-[297px] font-['Poppins'] font-medium text-[24px] leading-[36px] text-black">
                  Working Time
                </h2>
              </div>
              <h3 className="w-[212px] h-[92px] top-[1075px] left-[297px] font-['Poppins'] font-normal text-[16px] leading-[24px] text-black">
                Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00
              </h3>
            </div>
          </div>

          {/* right side */}
          <div className="w-[80%] md:w-[30%] md:h-[623px] top-[637px] left-[614px]  ">
            <div className="md:w-[531px] md:h-[640px] top-[756px] left-[688px] flex flex-col gap-6">
              <div className="md:w-[530px] md:h-[121px] top-[756px] left-[689px] rounded-[10px] ">
                <h2 className="w-[111.25px] h-[24px] top-[756px] left-[689px] font-['Poppins'] font-medium text-[16px] leading-[24px] text-black mb-3">
                  Your name
                </h2>
                <input
                  placeholder="Abc"
                  className=" md:w-[528.75px] md:h-[75px] top-[802px] left-[690.25px] rounded-[10px] border-[1px] border-[#9F9F9F] text-xl p-5 text-black"
                  type="text"
                />
              </div>
              {/* iput 2 */}
              <div className="md:w-[530px] md:h-[121px] top-[756px] left-[689px] rounded-[10px] ">
                <h2 className="w-[143.75px] h-[24px] top-[913px] left-[689px] font-['Poppins'] font-medium text-[16px] leading-[24px] text-black mb-3">
                  Email address
                </h2>
                <input
                  placeholder="Abc@def.com"
                  className="md:w-[528.75px] md:h-[75px] top-[802px] left-[690.25px] rounded-[10px] border-[1px] border-[#9F9F9F] text-xl p-5 text-black"
                  type="email"
                />
              </div>

              {/* input 3 */}
              <div className="md:w-[530px] md:h-[121px] top-[756px] left-[689px] rounded-[10px] ">
                <h2 className="w-[111.25px] h-[24px] top-[756px] left-[689px] font-['Poppins'] font-medium text-[16px] leading-[24px] text-black mb-3">
                  Subject
                </h2>
                <input
                  placeholder="This is an optional"
                  className="md:w-[528.75px] md:h-[75px] top-[802px] left-[690.25px] rounded-[10px] border-[1px] border-[#9F9F9F] text-xl p-5 text-black"
                  type="text"
                />
              </div>
              <div className="md:w-[530px] md:h-[121px] top-[756px] left-[689px] rounded-[10px] ">
                <h2 className="w-[111.25px] h-[24px] top-[756px] left-[689px] font-['Poppins'] font-medium text-[16px] leading-[24px] text-black mb-3">
                  Message
                </h2>
                <textarea
                  placeholder="Hi! i d like to ask about"
                  className="md:w-[528.75px] md:h-[120px] top-[1273px] left-[689px] rounded-[10px] border-[1px] border-[#9F9F9F] text-xl p-5 text-black"
                />
              </div>

              {/* submit button  */}
              <button className="w-[65%] md:w-[237px] h-[48px] top-[1442px] left-[695px] rounded-[15px] border-[1px] text-black border-black mt-10 hover:bg-gray-200">
                <Link href={""} className="">
                  {" "}
                  Submit
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* delivery */}
      <div className="mt-[-70px]">
        <Delivery />
      </div>
    </main>
  );
};

export default page;
