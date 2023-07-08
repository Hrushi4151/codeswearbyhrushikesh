'use client'
import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Forgot = () => {
    const router=useRouter();
    useEffect(() => {
        if(localStorage.getItem('token'))
        {
            router.push("/")
        }
      }, [])
      const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/sendEmail`,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const response =await res.json();
      console.log(response)
      if(response.status===200)
      {
        setIsEmailSent(true)
        toast.success("Email sent succesfully", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

    }
    else if(response.status===201){
          setIsEmailSent(false)
          toast.error("User not found.Please register", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
      }
      else if(response.status===401){
        setIsEmailSent(false)
        toast.error("Please enter your email", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      else{
        setIsEmailSent(false)
        toast.error("Failed to send email.Try again", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
      })
    }
  };
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 min-h-screen">
            <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-pink-600 sm:text-3xl">
                    Welcome Back ...!
                </h1>

                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt
                    dolores deleniti inventore quaerat mollitia?
                </p>

                {!isEmailSent &&  <form method='POST' required={true} className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                    <p className="text-center text-lg font-medium ">Forgot Password</p>
                    <input  onChange={handleEmailChange} type="email" required="true" className=" w-full rounded-lg border-gray-200 p-4  text-sm shadow-sm" placeholder="Enter your Email" />
                        <button onClick={handleSubmit} type="submit" className="my-4 block w-full rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white">
                            Continue
                        </button>
                </form>}
                {isEmailSent && 
                <div className="mb-0 mt-6 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                    Password Reset Email has been sent to your email.Kindly check your email and reset your password
                </p>
                <Link href={'/login'}>
                <button  type="submit" className="my-4 block w-full rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white">
                            Continue
                        </button>
                </Link>
                    </div>

                }
            </div>
        </div>
    )
}

export default Forgot
