import React from 'react'

const FreeTrial = () => {
  return (
    <section className='flex flex-col md:flex-row items-center md:h-[330px] bg-gradient-to-r from-[#262626] via-[#262626] to-red-600 justify-between mx-4 md:mx-[120px] px-4 py-2 md:py-0 md:px-[100px] rounded-[12px] mt-4'>
        <div>
          <h1 className='font-bold text-[38px] text-center md:text-start'>Start your free trial today!</h1>
        <p className='text-[18px] text-gray-600 text-center md:text-start'>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
        </div>
        <button className='bg-red-600 py-4 px-4 md:py-[18px] md:px-[24px] rounded-[8px]'>Start a Free Trial</button>
      </section>
  )
}

export default FreeTrial