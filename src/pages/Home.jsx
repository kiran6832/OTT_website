import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import FAQs from '../components/FAQs'
import FreeTrial from '../components/FreeTrial'
import Plans from '../components/Plans'
import generes from '../assests/generes.png'
import rightArrow from '../assests/rightArrow.png'
import leftArrow from '../assests/leftArrow.png'
const Home = () => {
  const devices=[
    {
      icon:'',
      head:'Smartphones',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     },
     {
      icon:'',
      head:'Tablet',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     },
     {
      icon:'',
      head:'Smart TV',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     },
     {
      icon:'',
      head:'Laptaps',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     },
     {
      icon:'',
      head:'Gaming concens',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     },
     {
      icon:'',
      head:'VR HeadSets',
      desc:'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store'   
     }
  ]
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
       <section className='md:mx-[120px]'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-16'>
          <div className=''>
           <h1 className='font-bold text-[38px] text-center md:text-start'>Explore our wide variety of categories</h1>
           <p className='text-[18px] text-gray-600 text-center md:text-start'>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
          </div>
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
       <section className='px-[8px] md:px-[120px] my-24'>
        <h1 className='font-bold text-[38px] text-center md:text-start'>We Provide you streaming experience across various devices.</h1>
        <p className='text-[18px] text-gray-600 text-center md:text-start'>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-16'>
        {
          devices.map((item,idx)=>(
            <div className='border-[0.5px] border-gray-700 rounded-[10px] bg-gradient-to-bl  from-red-600 via-black to-[#0F0F0F] px-[20px] py-[20px]'>
              <div><h1 className='font-semibold text-[24px]'>{item.head}</h1></div>
              <p className='text-[18px] text-gray-400'>{item.desc}</p>
            </div>

          ))

        }
      </div>
      </section>
      <Plans/>
      <FAQs/>
      <FreeTrial/>
      <Footer/>
    </div>
  )
}

export default Home