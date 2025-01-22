import React from 'react'

const Delivery = () => {
  return (
    <main className=' w-full flex-col h-[450px] md:flex-row space-y-6 md:space-y-0 md:w-[1347px] md:h-[300px] top-[2463px] bg-[#FAF4F4] gap-5  flex items-center justify-center '>
        {/* section----1 */}
        <div className='w-[90%] md:w-[376px] h-[108px] top-[2559px] left-[100px]'>
            <h2 className='w-[205px] h-[48px] top-[2559px] left-[100px] font-["Poppins"] font-medium text-[32px] leading-[48px] text-black'>Free Delivery</h2>
            <p className='w-[80%] md:w-[376px] h-[60px] top-[2607px] left-[100px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-[#9F9F9F]'>
            For all oders over $50, consectetur adipim scing elit.
            </p>
        </div>
        {/* section----2 */}
        <div className='w-[90%] md:w-[376px] h-[108px] top-[2559px] left-[524px]'>
            <h2 className='w-[244px] h-[48px] top-[2559px] left-[524px] font-["Poppins"] font-medium text-[32px] leading-[48px] text-black'>90 Days Return</h2>
            <p className='w-[80%] md:w-[376px] h-[60px] top-[2607px] left-[100px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-[#9F9F9F]'>
            If goods have problems, consectetur adipim scing elit.
            </p>
        </div>
        {/* section----3 */}
        <div className='w-[90%] md:w-[376px] h-[108px] top-[2559px] left-[944px]'>
            <h2 className='w-[265px] h-[48px] top-[2559px] left-[944px] font-["Poppins"] font-medium text-[32px] leading-[48px] text-black'>Secure Payment</h2>
            <p className='w-[80%] md:w-[376px] h-[60px] top-[2607px] left-[100px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-[#9F9F9F]'>
            100% secure payment, consectetur adipim scing elit.
            </p>
        </div>

    </main>
  )
}

export default Delivery