import Image from "next/image";
import Link from "next/link";
import React from "react";

const Twoproduct = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap justify-center text-center">
      <div className="sm:w-1/2 pt-8 px-20  ">
        <div className="rounded-lg h-84 overflow-hidden">
          <Image
          width={400}
          height={400}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/product-1.png"
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900  -">
        Side table
        </h2>
        
        <button className="flex mx-auto mt-3 text-black border-b border-black border-b-4    focus:outline-none">
         View more
        </button>
      </div>
      <div className="sm:w-1/2 pt-8 px-20  ">
        <div className="rounded-lg h-84 overflow-hidden">
          <Image
          width={400}
          height={400}
            alt="content"
            className="object-cover object-center h-full w-full"
            src="/product-2.png"
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900  -">
        Side table
        </h2>
        
        <button className="flex mx-auto mt-3 text-black border-b border-black border-b-4    focus:outline-none">
         View more
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Twoproduct;
