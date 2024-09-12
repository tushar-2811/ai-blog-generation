
const Input = ({placeholder , label, type , name , onChange , value}:{
    placeholder : string,
    label: string,
     type: string , 
     name: string , 
     onChange ?: any , 
     value: string
}) => {
  return (
    <div className='my-2 max-w-xl mx-auto'>
        <div className='flex justify-start font-medium pb-2'>{label}</div>
        <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className='h-12 w-full outline outline-2 bg-white/20 outline-purple-400 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]'/>
    </div> 
  )
}

export default Input