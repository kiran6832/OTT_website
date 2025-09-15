import React from 'react'
import Navbar from '../components/Navbar'
import FreeTrial from '../components/FreeTrial'
import Plans from '../components/Plans'
import Footer from '../components/Footer'
const SubscriptionPage = () => {
  return (
    <div className=''>
        <Navbar/>
        <Plans/>
        <section className='mx-4 md:mx-[120px]'>
            <h1  className='font-bold text-[38px] '>Compare our plans and find the right one for you</h1>
            <p className='text-[18px] text-gray-600 '>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</p>
        </section>
        <FreeTrial/>
        <Footer/>
    </div>
  )
}

export default SubscriptionPage