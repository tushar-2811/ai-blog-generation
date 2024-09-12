import  {useState} from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomTag from '../components/BottomTag'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const SignIn = () => {
  const [data , setData] = useState({
    email : "",
    password : ""
   })
   const [isLoading , setIsLoading] = useState(false);
   const navigate = useNavigate();

   const onChange = (e:any) => {
       setData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
       }))
   }

   const onSubmit = async() => {
     
     try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:4000/api/v1/user/sign-in' , {
          email : data.email,
          password : data.password
        });

        console.log(response.data)
        if(!response.data.ok){
            alert("try again" + response.data.message)
        }else{
            alert(response.data.message);
            localStorage.setItem("token" , response.data.data.token);
            localStorage.setItem("userId" , response.data.data.user._id);
            navigate('/dashboard');
        }
  
     } catch (error) {
        console.log("error while sign in" , error)
     }finally{
        setIsLoading(false)
     }
     
   }
  return (
    <div className=''>
    
       <h1 className='text-center my-5 text-2xl font-bold text-black'>Content.AI</h1>
        

    <div className='bg-black text-white max-w-5xl mx-auto p-8'>       
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
        <h3 className='text-center text-md text-white/70'>Enter Credentials</h3>

        <div className='mt-8'>
        <Input type={"email"} value={data.email} placeholder={"email"} label={"Email"} name={"email"} onChange={onChange}/>
              <Input type={"password"} value={data.password} name={"password"} placeholder={"password"} label={"Password"} onChange={onChange}/>
              <Button title={"Sign In"} onSubmit={onSubmit} disabled={isLoading}/>
        </div>

        <div className='mt-8'>
            <BottomTag label={"Don't have an account ?"} to={"/signup"} buttonText={"Sign Up"}/>
          </div>
    </div>
    
  </div>
  )
}

export default SignIn