import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import moviesImage from '../assests/moviesOpen.png'
const MoviesPageOpen = () => {
  return (
    <div>
      <Navbar/>
       <div className='relative   min-h-screen px-[10px] md:px-[120px]' >
                    <img src={moviesImage} alt='hero' className='w-full md:h-[500px] '></img>
                    <div className='absolute md:top-[300px] flex flex-col items-center gap-4 md:gap-12 '>
                    <h1 className='font-bold text-[32px] md:text-[58px] text-center'>Kantara</h1>
                    <p className='text-[18px] text-gray-600 text-center'>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
                   <button className='bg-red-600 py-[18px] px-[24px] rounded-[8px]'>Play Now</button>
                    </div>
                </div>
      <section className='flex gap-6 md:mx-[100px] w-full mt-16'>
        <div className='space-y-4 w-[1057px]'>
          <div className='bg-[#1A1A1A] rounde-[12px] p-2'>
            <p>Description</p>
            <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
          </div>
          <div className='h-[290px] bg-[#1A1A1A] rounded-[12px]'>

          </div>
          <div className='bg-[#1A1A1A] space-y-4  rounded-[12px] p-8'>
            <div className='flex justify-between items-center'>
              <p>Reviews</p>
              <button className='bg-black rounded-[8px] px-4 py-2'>+ Add Your Review</button>
            </div>
            <div className='flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide'>
              {
                [1,2,3,4,5,6].map((item,idx)=>(
                  <div className='flex items-center '>
                    <div className='w-[380px] space-y-2 rounded-[10px] bg-black p-4'>
                      <div className='flex justify-between'>
                        <div>
                          <p>Aniket Readdy</p>
                          <p>From India</p>
                        </div>
                        <p>Ratings</p>
                      </div>
                      <p>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

        </div>
        <div className='bg-[#1A1A1A]  rounded-[12px] p-8'>
          <p>Release Year</p>
          <p>Available Languages</p>
          <p>Ratings</p>
          <p>Gernes</p>
          <p>Director</p>
          <p>Music</p>

        </div>
      </section>
      <Footer/>

    </div>
  )
}

export default MoviesPageOpen