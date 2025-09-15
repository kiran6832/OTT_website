import React from 'react'

const Hero = () => {
  return (
    <div className='min-h-screen'>
        <img src='' alt='hero' className='w-full h-[300px]'></img>
        <div className='flex flex-col items-center gap-12 md:px-[200px]'>
        <h1 className='font-bold text-[32px] md:text-[58px] text-center'>The Best Streaming Experience</h1>
        <p className='text-[18px] text-gray-600 text-center'>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
       <button className='bg-red-600 py-[18px] px-[24px] rounded-[8px]'>Start watching now</button>
        </div>
    </div>
  )
}

export default Hero