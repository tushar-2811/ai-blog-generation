import React from 'react'
import MenuImage from '../assets/icons/menu.svg'
import { Link, useNavigate } from 'react-router-dom'


const Header:React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='px-4 py-4'>
    <div className='flex justify-between items-center'>
     <div className='text-2xl bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text'>
        Content.AI
     </div>

     <div className='border border-black items-center inline-flex p-1 rounded-lg sm:hidden'>
         <img src={MenuImage} alt="menu" />
     </div>

     <div className='hidden sm:flex gap-6 md:gap-12 items-center'>
         <Link to={"/"} className='hover:text-purple-300 transition'>Features</Link>
         <Link to={"/"} className='hover:text-purple-300 transition'>About</Link>
         <Link to={"/"} className='hover:text-purple-300 transition'> Updates</Link>
         <Link to={"/"} className='hover:text-purple-300 transition'>Help</Link>
         <button onClick={() => navigate('/signin')} className='bg-black px-4 py-2 text-white rounded-lg'>Start Here</button>
     </div>
</div>
</div>
  )
}

export default Header
