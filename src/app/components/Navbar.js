"use client";
import { GlobalContext } from "../context/Context";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillMinusSquare,
  AiFillPlusSquare,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {

  let success=false
  const router=useRouter()
  const [profile, setprofile] = useState(false);

  const { logout,addToCart, removeFromCart, clearCart, cart, subTotal, user } =
    GlobalContext();
  const [toggle, settoggle] = useState("invisible");
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
      <header className="text-gray-600 body-font shadow-lg  w-full bg-white sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-col lg:flex-row  items-center">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mr-auto md:mr-0 mb-4 md:mb-0"
          >
            <Image src={"/logo.png"} width={200} height={40} alt="logo" />
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center  ">
            <Link
              href={"/tshirt"}
              className="text-xs md:text-sm hover:text-gray-900 bg-pink-400 rounded-lg border-2 border-gray-500 m-2 p-2  text-black font-bold"
            >
              T-Shrits
            </Link>
            <Link
              href={"/hoodies"}
              className="text-xs md:text-sm hover:text-gray-900 bg-pink-400 rounded-lg border-2 border-gray-500 m-2 p-2  text-black font-bold"
            >
              Hoodies
            </Link>
            <Link
              href={"/stickers"}
              className="text-xs md:text-sm hover:text-gray-900 bg-pink-400 rounded-lg border-2 border-gray-500 m-2 p-2  text-black font-bold"
            >
              Stickers
            </Link>
            <Link
              href={"/caps"}
              className="text-xs md:text-sm hover:text-gray-900 bg-pink-400 rounded-lg border-2 border-gray-500 m-2 p-2  text-black font-bold"
            >
              Caps
            </Link>
            <Link
              href={"/mugs"}
              className="text-xs md:text-sm hover:text-gray-900 bg-pink-400 rounded-lg border-2 border-gray-500 m-2 p-2  text-black font-bold"
            >
              Mugs
            </Link>
          </nav>
          <div className="flex absolute right-1 space-x-4 top-1 p-2 justify-center items-center w-auto">
            {user.value != null ? (
              <MdAccountCircle
                onMouseOver={() => setprofile(true)}
                onMouseLeave={() => setprofile(false)}
                className="text-3xl cursor-pointer"
              />
            ) : (
              <Link
                href={"/login"}
                className="block w-full rounded-lg bg-pink-600 px-3 py-1 text-sm font-medium text-white cursor-pointer"
              >
                Login
              </Link>
            )}
            {/* { profilecard */}
            {profile && (
              <div  onMouseOver={() => setprofile(true)}
              onMouseLeave={() => setprofile(false)} className="flex items-center  justify-center top-10 absolute right-[5.5rem] p-4 border-2 border-pink-500 bg-white shadow-xl rounded-lg">
                <div className="max-w-xs">
                  <div className="photo-wrapper p-2">
                    <img
                      className="w-32 h-32 rounded-full mx-auto"
                      src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                      alt="John Doe"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                      Joh Doe
                    </h3>
                    <table className="text-xs my-3">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Address
                          </td>
                          <td className="px-2 py-2">
                            Chatakpur-3, Dhangadhi Kailali
                          </td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Phone
                          </td>
                          <td className="px-2 py-2">+977 9955221114</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 text-gray-500 font-semibold">
                            Email
                          </td>
                          <td className="px-2 py-2">john@exmaple.com</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-center items-start space-x-2">
                      <button onClick={()=>{success=logout();setprofile(false);
                      if(success)
                      {
                        router.push("/")
                        toast.success("Logout Successfull", {
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
                      }} className="block w-full rounded-lg bg-pink-600 px-3 py-2 text-sm font-medium text-white">
                        Logout
                      </button>
                      <Link href={"/orders"} onClick={()=>setprofile(false)}>
                        <button className="block w-full rounded-lg bg-pink-600 px-3 py-2 text-sm font-medium text-white">
                          MyOrders
                        </button>
                      </Link>
                    </div>

                    <div className="text-center my-3">
                      <Link
                        className="text-xs text-pink-500 hover:underline hover:text-pink-600 font-medium"
                        href="/myaccount"
                      >
                        My Account
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Link
              href={"#"}
              onClick={() => settoggle("visible")}
              className=" bg-gray-100  focus:outline-none hover:bg-gray-200 rounded-full cursor-pointer m-1 p-1"
            >
              <AiOutlineShoppingCart className="text-3xl " />
            </Link>
          </div>
        </div>
        <div
          className={`sidecart  bg-pink-400 absolute top-0 right-0 w-full md:w-96 h-[100vh] p-8 z-20   ${toggle} `}
        >
          <div
            onClick={() => settoggle("invisible")}
            className="inline-flex items-center bg-gray-100  p-3 focus:outline-none hover:bg-gray-200 rounded-full text-base  absolute right-2 top-4 cursor-pointer"
          >
            <AiFillCloseCircle className="text-2xl text-black " />
          </div>
          <h2 className="font-bold text-xl text-black my-2">Shopping Cart</h2>
          <ol className="list-decimal ">
            {Object.keys(cart).length == 0 && <div>Your cart is Empty</div>}
            {Object.keys(cart).map((k) => {
              return (
                <li className="my-4 text-black" key={k}>
                  <div className="item flex flex-row  items-center bg-white p-2 rounded ">
                    <div className="flex justify-start w-3/4 font-semibold">
                      {cart[k].name}
                      {subTotal}
                    </div>
                    <div className="flex  justify-evenly items-center w-1/4 text-xl font-semibold">
                      <AiFillMinusSquare
                        onClick={() =>
                          removeFromCart(
                            k,
                            1,
                            cart[k].name,
                            cart[k].price,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                        className="text-black"
                      />
                      <span>{cart[k].qty}</span>
                      <AiFillPlusSquare
                        onClick={() =>
                          addToCart(
                            k,
                            1,
                            cart[k].name,
                            cart[k].price,
                            cart[k].size,
                            cart[k].variant
                          )
                        }
                        className="text-black"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="my-2 mx-4 w=full text-right">
            <span className="text-lg font-bold text-black">
              SubTotal={subTotal}
            </span>
          </div>
          <div className="flex justify-center items-center mx-auto mt-8 border-0 py-2 px-4">
            <Link href={"/checkout"}>
              {" "}
              <button className="flex justify-center items-center mx-auto  text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">
                <BsFillBagCheckFill />
                CheckOut
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex justify-center items-center mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg"
            >
              <BsFillBagCheckFill />
              Clear Cart
            </button>
          </div>
        </div>
        <hr className="" />
      </header>
    </>
  );
};

export default Navbar;
