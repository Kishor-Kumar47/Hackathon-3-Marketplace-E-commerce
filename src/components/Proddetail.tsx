// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const Proddetail = () => {
//   return (
//     <main className='flex flex-col w-full h-[650px] justify-center items-center md:flex-row md:w-[1347px] md:h-[690px] mt-[-60px] top-[2389px] left-[-36px] bg-[#FFF9E5]     '>
//         {/* img sec*/}

//         <div className='w-[80%] md:w-[883px] top-[239px] mt-[-40px] left-[-36px]    '>
//             <Image
//             src={'/proddetail-pro-1.png'}
//             width={883}
//             height={599}
//             alt='img'
//             />

//         </div>


//         {/* text sec */}

//         <div className='w-[80%]  md:w-[331px] md:h-[205px] md:top-[2686px] left-[1012px] text-black md:mt-[230px] ml-10 space-y-8 '>
//             <div className='w-[80%] h-[210px] md:w-[331px] md:h-[108px] top-[2686px] left-[1012px] text-black '>
//                 <p className='w-[149px] h-[36px] top-[2686px] left-[1103px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black ml-[50px]'>New Arrivals</p>
//                 <h2 className='w-[240px] md:w-[331px] h-[72px] top-[2722px] left-[1012px] font-["Poppins"] font-bold text-[48px] leading-[72px] text-black'>Asgaard sofa</h2>

//             </div>
//             {/* button */}
//             <div className='w-[70%] h-[64px] top-[2827px] left-[1050px] text-black hover:bg-[#FBEBB5] border border-[1px] border-black ml-[30px] flex items-center justify-center'>
//                <Link href={'/singleProduct'}> <button  className='w-[106px] h-[30px] top-[2844px]  left-[1125px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>
//                 Order Now
//                 </button></Link>

//             </div>

//         </div>
//     </main>
//   )
// }

// export default Proddetail






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





import Image from 'next/image'
import React from 'react'

const Proddetail = () => {
  return (
    <div>
        
      <section className="text-gray-600 bg-pink-100 body-font">
        <span className='flex flex-col items-center'><h1 className='text-4xl  font-extrabold mb-2 mt-3 '>Feature Product</h1></span>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
      width={720}
      height={600}
        className="object-cover object-center rounded"
        alt="hero"
        src="/proddetail-pro-1.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Out Door Sofa
      </h1>
      <p className="mb-8 leading-relaxed">
        Neutra shabby chic ramps viral fixie. Cray pug you probably have not
        heard of them hexagon kickstarter craft beer migas truffaut. Glass
        of wine poster art. By create next
      </p>
      
      
      <div className="flex lg:flex-row md:flex-col">
        <button className="bg-orange-500 inline-flex text-white font-bold py-3 px-5 rounded-lg items-center hover:bg-orange-600 focus:outline-none">
          Order Now
        </button>
        <button className="bg-gray-600 text-white inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-700 focus:outline-none">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Proddetail