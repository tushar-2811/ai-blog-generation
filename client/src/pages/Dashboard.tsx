import { useEffect, useState } from "react"
import DashboardHeader from "../components/DashboardHeader"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"


const Dashboard = () => {
    const [data , setData] = useState({
        topic : "",
        keywords : "",
        terminology : "",
        writingStyle : ""
    })
    
    const [content , setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log(data)
    }

    const onChange = (e:any) => {
        setData(prev => ({
         ...prev,
         [e.target.name] : e.target.value
        }))
    }


    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/signin');
        }
    }, [])
    return (
        <div>
            <DashboardHeader />
            <div className="grid grid-cols-12">

                <div className="col-span-6 mt-6 py-8 border-r-2 items-center border-black">
                    <h1 className="text-3xl bg-gradient-to-r from-pink-400 to-sky-400 text-transparent bg-clip-text p-4 text-center">Start Creating Content</h1>
                    <div className="flex flex-col gap-4">
                        <div className="form-group">
                            <Input label="Topic" onChange={onChange} type="text" placeholder="e.g., a magic backpack" name="topic" value={data.topic} />
                        </div>
                        <div className="form-group">
                            <Input type="text" onChange={onChange} label="keywords (comma seperated)" placeholder="e.g., magic, backpack" name="keywords" value={data.keywords} />
                        </div>
                        <div className="form-group">

                            <Input type="text" onChange={onChange} label="Terminology" placeholder="e.g., enchanted, mystical" value={data.terminology} name="terminology"  />
                        </div>
                        <div className="form-group">

                            <Input type="text"  onChange={onChange} label="Writing Style" placeholder="e.g., humorous, formal" value={data.writingStyle} name="writingStyle" />
                        </div>
                        <div className='flex justify-center  my-4 max-w-xl mx-auto '>
                            <button onClick={handleSubmit} className='w-full text-white bg-black rounded-lg px-4 py-2'>
                                Generate
                            </button>
                        </div>

                    </div>

                </div>

                <div className="col-span-6">

                </div>
    

      

        </div>
        </div>
    )
}

export default Dashboard;
