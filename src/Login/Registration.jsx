import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile,  } from 'react-firebase-hooks/auth';
import auth from "../firebase.config";
import { toast } from 'react-toastify';
 
const Registration = () => {
  const [updateProfile, updating, UpError] = useUpdateProfile(auth);
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
 
    ] = useCreateUserWithEmailAndPassword(auth);

    const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
      const user= { name :data.name,
                    email:data.email
    }
    fetch('http://localhost:5000/user',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({user})
    })
      .then(res => res.json())
      .then(data => {
      
            if(data.insertedId){
                toast.success('user create')
              
            }
            else{
               toast.error('Oh no try again later')
            }
        })
    await createUserWithEmailAndPassword(data?.email, data?.password)
    await updateProfile({ displayName : data?.name });
    }
    console.log(user, loading, error);
    if(loading | updating){
      return <p>Loading...</p>
    }
    let errorMassage
  if (error | UpError){
             errorMassage = <div className='text-red-500'>Error: {error?.message}</div>
        }
    return (
        <div className="flex justify-center items-center h-screen">
      <div className="w-96 bg-base-200 shadow-lg py-6 px-6">
        <h2 className="text-center text-2xl mb-11 font-bold">Registration</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Name</span>
            </label>
            <input type="text" placeholder="Your Name" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('name', { required: true })} />
            {errors.name && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Email</span>
            </label>
            <input type="email" placeholder="Your Email" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('email', { required: true })} />
            {errors.email && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="text-base text-black font-bold">Password</span>
            </label>
            <input type="password" placeholder="Password" className="text-center py-2 w-72 my-2 focus:outline-none rounded border-gray-500 border-2 " {...register('password', { required: true })} />
            {errors.password && <p className="text-lg text-red-600">This field is required</p>}
          </div>
          <div className="flex justify-center">
            <input className="px-14 cursor-pointer py-2 border-2 border-black  text-white mt-8 bg-black hover:text-black hover:bg-white" type="submit" />
          </div>
                </form>
                {errorMassage}
      </div>
    </div>
    );
};

export default Registration;