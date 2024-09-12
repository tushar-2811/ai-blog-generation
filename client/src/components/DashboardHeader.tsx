import React from 'react'
import MenuImage from '../assets/icons/menu.svg'
import { useNavigate } from 'react-router-dom'


const DashboardHeader:React.FC = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate('/');
        alert("sign out successful");
    }
  return (
    <div className='px-4 py-4 border-b border-black'>
    <div className='flex justify-between items-center'>
     <div className='text-4xl bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text'>
        Content.AI
     </div>

     <div className='border border-black items-center inline-flex p-1 rounded-lg sm:hidden'>
         <img src={MenuImage} alt="menu" />
     </div>

     <div className='hidden sm:flex gap-6 md:gap-12 items-center'>
         <button onClick={handleOnClick} className='bg-black px-4 py-2 text-white rounded-lg'>Sign Out</button>
     </div>
</div>
</div>
  )
}

export default DashboardHeader
