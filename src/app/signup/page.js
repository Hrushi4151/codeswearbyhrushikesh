"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('token'))
    {
        router.push("/")
    }
  }, [])
  const [user, setuser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const response =await res.json();
    if (response.status===200) {
		toast.success("Registration Successful", {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
    setTimeout(() => {
      router.push("/login")
    }, 3000);
    } else {
		toast.error("Registration Failed.Try again", {
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
            Get started Today....
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            method="POST"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              SignUp for your account
            </p>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                onChange={handleChange}
                value={user.name}
                name="name"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your Name"
                autoComplete="false"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                onChange={handleChange}
                value={user.email}
                name="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your Email"
                autoComplete="off"
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
                autoComplete="off"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter Password"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="block w-full rounded-lg bg-pink-600 px-5 py-3 text-sm font-medium text-white"
            >
              Signup
            </button>
            <p className="text-center text-sm text-gray-500">
              Have an account?
              <Link href={"/login"} className="underline">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
