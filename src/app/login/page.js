"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('token'))
    {
        router.push("/")
    }
  }, [])
  

  const [user, setuser] = useState({email: "", password: "" });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response = await res.json();
    if (response.status === 200) {
      localStorage.setItem('token',response.token)
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
        router.push("/")
    } else if(response.status===201) {
      toast.error("Invalid Credentials,Try Again..", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else if(response.status===400) {
      toast.error("User not found.Please Register", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    else{
      toast.error("Failed to register.Try Again", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setuser({email: "", password: "" })
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-pink-600 sm:text-3xl">
            Welcome Back ...!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form method="POST"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium ">
              Login into your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input onChange={handleChange}
                value={user.email}
                name="email"
                type="email"
                autoComplete='off'
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={handleChange}
              value={user.password}
              name="password"
              type="password"
              autoComplete='off'
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
              />
            </div>
            <div className="m-4">
              <Link
                href={"/forgotpass"}
                className="text-sm text-gray-400"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="block w-full rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <Link href={"/signup"} className="underline">
                {" "}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
