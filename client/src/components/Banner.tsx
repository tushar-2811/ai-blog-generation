import React from 'react'
import { Link } from 'react-router-dom'

const Banner:React.FC = () => {
  return (
    <div className=' text-center py-3 bg-gradient-to-r from-sky-400 via-pink-300 to-slate-400 '>
       <div className='container '>
            <p className='font-medium'>
                <span className='hidden sm:inline-flex'>Introducing you to the future - {" "}</span>
                <Link className=' underline underline-offset-4' to={"/"}>Explore the demo</Link>
            </p>
       </div>
    </div>
  )
}

export default Banner