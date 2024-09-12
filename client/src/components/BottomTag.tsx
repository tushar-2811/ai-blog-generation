
import { Link } from 'react-router-dom'

const BottomTag = ({label , buttonText , to} :{
    label : string,
    buttonText : string,
    to : string
}) => {
  return (
    <div className='flex justify-center gap-2'>
        <div>
            {label}
        </div>
        <Link to={to} className='underline hover:cursor-pointer' >
        {buttonText}
        </Link>
      
    </div>
  )
}

export default BottomTag
{}