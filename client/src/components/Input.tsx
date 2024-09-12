
const Input = ({placeholder , label, type , name , onChange , value}:{
    placeholder : string,
    label: string,
     type: string , 
     name: string , 
     onChange: any , 
     value: string
}) => {
  return (
    <div className='my-2 max-w-xl mx-auto'>
        <div className='flex justify-start font-medium pb-2'>{label}</div>
        <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className='w-full px-4 py-2 text-black rounded-lg'/>
    </div> 
  )
}

export default Input