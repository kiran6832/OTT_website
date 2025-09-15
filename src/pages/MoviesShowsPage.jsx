import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FreeTrial from '../components/FreeTrial'
import generes from '../assests/generes.png'
import top10 from '../assests/top10.png'
import trending from '../assests/trending.png'
import mustwatchmovie from '../assests/mustwatchmovie.png'
import newrelese from '../assests/newrelease.png'
import rightArrow from '../assests/rightArrow.png'
import leftArrow from '../assests/leftArrow.png'
const MoviesShowsPage = () => {
  return (
    <div>
      <Navbar/>
     <div className='relative border border-gray-800 rounded-[10px] p-8 md:mx-[100px]'>
        <button className='absolute  top-[-20px] bg-red-600 py-[10px] px-[18px] rounded-[8px]'>Movies</button>
        <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Our Genres</h1>
           <div className='flex items-center gap-4 bg-black px-2 py-2'>
                      <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                      <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                       <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                    </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
            <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={generes} className='h-[240px]'></img>
                            <div className='flex justify-between'>
                              <p>Action</p>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Popular Top 10 Genres</h1>
          <div className='flex items-center gap-4 bg-black px-2 py-2'>
                     <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                     <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                      <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                   </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
               <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={top10} className='h-[240px]'></img>
                            <div className='flex items-center justify-between'>
                              <div className='space-y-1'>
                                <p className='bg-red-700 rounded-[8px] px-2 py-1'>Top 10 in</p>
                              <p>Action</p></div>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Trending Now</h1>
          <div className='flex items-center gap-4 bg-black px-2 py-2'>
                     <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                     <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                      <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                   </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
              <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={generes} className='h-[240px]'></img>
                            <div className='flex justify-between'>
                              <p>Action</p>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>New Releses</h1>
           <div className='flex items-center gap-4 bg-black px-2 py-2'>
                      <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                      <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                       <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                    </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
              <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={newrelese} className='h-[240px]'></img>
                            <div className='flex justify-between mt-2'>
                              <p className='bg-black px-2 rounded-full'>release at 25 jun 2025</p>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Must Watch Movies</h1>
           <div className='flex items-center gap-4 bg-black px-2 py-2'>
                      <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                      <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                       <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                    </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
             <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={mustwatchmovie} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                              <p className='bg-black px-2 rounded-full'>1h 50min</p>
                              <p className='bg-black px-2 rounded-full'>rating</p>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
     </div>
          <div className='relative border border-gray-800 rounded-[10px] p-8 md:mx-[100px] mt-12'>
        <button className='absolute top-[-20px] bg-red-600 py-[10px] px-[18px] rounded-[8px]'>Shows</button>
        <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Our Genres</h1>
           <div className='flex items-center gap-4 bg-black px-2 py-2'>
                      <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                      <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                       <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                    </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
                  <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={generes} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                              <p>Action</p>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                            </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Popular Top 10 Genres</h1>
          <div className='flex items-center gap-4 bg-black px-2 py-2'>
                     <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                     <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                      <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                   </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
                  <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={generes} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                               <p className='bg-red-700 rounded-[8px] px-2 py-1'>Top 10 in</p>
                              <p>Action</p></div>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Trending Now</h1>
          <div className='flex items-center gap-4 bg-black px-2 py-2'>
                     <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                     <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                      <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                   </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
              
                 <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={trending} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                              <p>Action</p>
                              <img src={rightArrow} className=' w-[32px] h-[32px] '></img>
                              </div>
                            </div>
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>New Releses</h1>
           <div className='flex items-center gap-4 bg-black px-2 py-2'>
                      <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                      <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                       <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                    </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
                 <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={newrelese} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                                 <p className='bg-black px-2 rounded-full'>release at 25 jun 2025</p>
                              </div>
                            </div>
            </div>
    
          ))

        }
      </div>
      </section>
       <section className=''>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Must Watch Movies</h1>
          <div className='flex items-center gap-4 bg-black px-2 py-2'>
                     <img src={leftArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                     <p className='text-[32px] font-extraBold'><span className='text-red-700'>-</span>---</p>
                      <img src={rightArrow} className='bg-gray-700 w-[32px] h-[32px] rounded-[5px] px-[2px] py-[2px]'></img>
                   </div>
        </div>
      <div className='flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide'>
        {
          [1,2,3,4,5,6,7,8].map((item,idx)=>( 
           
            <div className='flex items-center bg-[#1A1A1A] rounded-[10px]'>
                  <div className='w-[150px] md:w-[250px] px-4 pt-4 pb-6'>
                            <img src={mustwatchmovie} className='h-[240px]'></img>
                            <div className='flex items-center justify-between mt-2'>
                              <p className='bg-black px-2 rounded-full'>1h 50min</p>
                              <p className='bg-black px-2 rounded-full'>rating</p>
                              </div>
                            </div>
             
            </div>
    
          ))

        }
      </div>
      </section>
     </div>
     <FreeTrial/>
     <Footer/>
    </div>
  )
}

export default MoviesShowsPage