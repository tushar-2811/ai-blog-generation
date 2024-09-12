import { useEffect } from "react"
import DashboardHeader from "../components/DashboardHeader"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/signin');
        }
    },[])
  return (
    <div>
      <DashboardHeader/>
    </div>
  )
}

export default Dashboard
