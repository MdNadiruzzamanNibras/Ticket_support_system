import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


const ReplyAsk = () => {
    const { id } = useParams();
   
    const [support, setSupport] = useState({})
  
    useEffect(() => {
        fetch(`http://localhost:5000/support/${id}`)
            .then(res => res.json())
            .then(data => {
                setSupport(data.support)
            })
    }, [id])
    
    const {
    
    formState: { errors },
    } = useForm()
    const handlechange = (e) => {
        
        const { name, value } = e.target;
        console.log({ name, value });
       
        setSupport({ ...support, [name]: value });
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
         
    fetch(`http://localhost:5000/reply/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({support})
    })
      .then(res => res.json())
      .then(data => {
      
            if(data){
                toast.success('Update the reply')
              
            }
            else{
               toast.error('Oh no try again later')
            }
        })
   
    }
    return (
         <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-base-200 shadow-lg py-6 px-6">
        <h2 className="text-center text-2xl mb-11 font-bold">New Support</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Name</span>
            </label>
            <input onChange={handlechange} type="text" value={support?.name} name="name" placeholder="Your Name" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            {errors.name && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input onChange={handlechange} name="email" type="email" value={support?.email} placeholder="Your Email" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            {errors.email && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Question</span>
            </label>
            <input onChange={handlechange} name="question" type="text" value={support?.question}  placeholder="Your question" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            {errors.question && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Reply</span>
            </label>
            <input type="text" onChange={handlechange} name="reply"  placeholder="Reply" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 "  />
            {errors.reply && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Status</span>
            </label>
            <select
                            id="replyType"
                            onChange={handlechange} name="status"
    className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2"
   
  >
    <option value="">Select reply type</option>
    <option value="Open">Open</option>
    <option value="In Progress">In Progress</option>
    <option value="Resolved">Resolved</option>
  </select>
  {errors.reply && (
    <p className="text-lg text-red-600">Please select a reply type</p>
  )}
          </div>
          
          <div className="flex justify-center">
            <input className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
          </div>
                </form>
                
      </div>
    </div>
    );
};

export default ReplyAsk;