import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../firebase.config"
import { toast } from "react-toastify";
const CreateSupport = () => {
  const [user] =useAuthState(auth)
    const {
    register,
    handleSubmit,
    
    formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
      const support= { name :data.name,
          email: data.email,
          status: "open",
          question: data.question
                    
        }
        console.log(support, 'tickte');
    fetch('http://localhost:5000/support',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({support})
    })
      .then(res => res.json())
      .then(data => {
      console.log(data, 'data');
            if(data.insertedId){
                toast.success('question done ')
              
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Name</span>
            </label>
            <input type="text" value={user?.displayName} placeholder="Your Name" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('name', { required: true })} />
            {errors.name && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input type="email" value={user?.email} placeholder="Your Email" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('email', { required: true })} />
            {errors.email && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Question</span>
            </label>
            <input type="text"  placeholder="Your question" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('question', { required: true })} />
            {errors.question && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          
          <div className="flex justify-center">
            <input className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
          </div>
                </form>
                
      </div>
    </div>
    );
};

export default CreateSupport;