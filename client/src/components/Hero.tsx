import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Arrow from '../assets/icons/arrow-w.svg'

const Hero:React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-gradient-to-b from-white  to-purple-400 py-[72px]'>
            <div className="container">

                <div className='flex justify-center items-center'>
                    <Link to={"/"} className='flex gap-1 border border-black py-1 px-2 rounded-xl'>
                        <span className='bg-gradient-to-r from-red-500 via-black to-blue-400 text-transparent bg-clip-text'>New version is here</span>
                        <img src={Arrow} alt="arrow" />
                    </Link>
                </div>

                <div className='flex justify-center mt-12'>
                    <h1 className='text-7xl font-bold sm:text-9xl text-center tracking-tighter inline-flex'>Create Content <br /> on a Click</h1>
                </div>


                <div className='flex justify-center '>
                    <p className='text-xl mt-8 font-medium text-center tracking-tighter max-w-md'>
                        Create your content with ease.
                        Access your content anytime, with AI,
                        Manage your content effortlessly.
                        </p>
                </div>

                <div className='flex justify-center mt-8'>
                    <button onClick={() => navigate('/signin')} className='bg-black text-white px-4 py-2 rounded-xl'>Create Content </button>
                </div>
            </div>

        </div>
    )
}

export default Hero