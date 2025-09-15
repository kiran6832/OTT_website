import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.png'
const Navbar = () => {
    const menu=[
      {
        link:'/',
        name:'Home'
      },
      {
        link:'/moviesandshows',
        name:'Movies&Shows'
      },
      {
        link:'/support',
        name:"Support"
      },
      {
        link:"/subscription",
        name:"Subscriptions"
      }]
  return (
    <div className='flex items-center justify-between  px-4 md:px-[120px] py-[30px]'>
      <div className='flex items-center'>
        <img src={logo} className='w-[32px] h-[32px]'></img>
         <h1>StreamVibe</h1>
      </div>
        <div className='hidden bg-black md:flex items-center justify-between gap-4 py-[10px] px-[10px] rounded-[10px]'>
           {
            menu.map((item,index)=>(
               <Link to={item.link}><p className=''>{item.name}</p></Link>
            ))
            
           }
        </div>
        <div className='hidden md:flex items-center justify-between gap-4'>
            <p>Search</p>
            <p>Noti</p>
        </div>
        <p className='block md:hidden'>Menu</p>
    </div>
  )
}

export default Navbar