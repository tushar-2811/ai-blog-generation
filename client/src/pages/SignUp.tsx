import { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import BottomTag from '../components/BottomTag'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
   const [data , setData] = useState({
    email : "",
    name : "",
    password : ""
   });
   const [isLoading , setIsLoading] = useState(false);

   const navigate = useNavigate();

   const onChange = (e:any) => {
       setData(prev => ({
        ...prev,
        [e.target.name] : e.target.value
       }))
   }

   const onSubmit = async() => {
     console.log(data);
    try {
      setIsLoading(true);
      const response = await axios.post('http://localhost:4000/api/v1/user/sign-up' , {
        email : data.email,
        name : data.name,
        password : data.password
      });

      if(!response.data.ok){
         // show that sign up is not done 
         return;
      }else{
         navigate('/signin');
      }
    } catch (error) {
      console.log("Error while sign up" , error);
    }finally{
      setIsLoading(false);
    }
    
   }
  return (
    <div className=''>
       <h1 className='text-center my-5 text-2xl font-bold  text-black'>Content.AI</h1>

      <div className='bg-black max-w-5xl text-white p-8 mx-auto '>       
          <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
          <h3 className='text-center text-md text-white/70'>Create your account</h3>

          <div className='mt-8'>
              <Input type={"email"} value={data.email} placeholder={"email"} label={"Email"} name={"email"} onChange={onChange}/>
              <Input type={"text"} value={data.name} placeholder={"name"} label={"Name"} name={"name"} onChange={onChange}/>
              <Input type={"password"} value={data.password} name={"password"} placeholder={"password"} label={"Password"} onChange={onChange}/>
              <Button title={"Create Account"} onSubmit={onSubmit} disabled={isLoading}/>
          </div>

          <div className='mt-8'>
            <BottomTag label={"Already have an account ?"} to={"/signin"} buttonText={"Sign In"}/>
          </div>
      </div>
      
    </div>
  )
}

export default SignUp