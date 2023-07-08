'use client'
import React from 'react'
import { GlobalContext } from '../context/Context';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';



const checkout = () => {
    const { addToCart, removeFromCart, cart, subTotal } = globalContext();
    return (
        <div>
            <section class="text-gray-600 body-font min-h-screen">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-bold  mb-4 text-gray-900">CheckOut</h1>

                    </div>
                    <div class="lg:w-1/2 md:w-2/3 w-full mx-auto my-4">
                        <h2 class="text-xl font-bold  mb-4 text-gray-900">1.Delivery Details</h2>
                        <div class="flex flex-wrap justify-between">
                            <div class="p-2 w-full md:w-1/2">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            </div>
                            <div class="p-2 w-full md:w-1/2">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                            <textarea id="address" name="address" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <div class="p-2 w-full md:w-1/2">
                                <label htmlFor="name" class="leading-7 text-sm text-gray-600">Phone</label>
                                <input type="text" id="phone" name="phone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            </div>
                            <div class="p-2 w-full md:w-1/2">
                                <label for="city" class="leading-7 text-sm text-gray-600">City</label>
                                <input type="text" id="city" name="city" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <div class="p-2 w-full md:w-1/2">
                                <label htmlFor="state" class="leading-7 text-sm text-gray-600">State</label>
                                <input type="text" id="state" name="state" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            </div>
                            <div class="p-2 w-full md:w-1/2">
                                <label for="pincode" class="leading-7 text-sm text-gray-600">Pincode</label>
                                <input type="number" id="pincode" name="pincode" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="lg:w-1/2 md:w-2/3 w-full mx-auto my-4">
                        <h2 class="text-xl font-bold  mb-4 text-gray-900">2.Review Itesms & Pay</h2>
                        <div className="mx-auto p-4 bg-pink-400 rounded-sm">
                            <ol className='list-decimal p-2'>
                                {Object.keys(cart).length == 0 && <div className='item flex flex-row  items-center bg-white p-2 rounded'>Your cart is Empty</div>}
                                {Object.keys(cart).map((k) => {
                                    return <li className="my-2 text-black" key={k} >
                                        <div className='item flex flex-row  items-center bg-white px-2 rounded '>
                                            <div className='flex justify-start w-3/4 font-semibold'>
                                                {cart[k].name}
                                            </div>
                                            <div className='flex  justify-evenly items-center w-1/4 text-xl font-semibold'>
                                                <AiFillMinusSquare onClick={() => removeFromCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].variant)} className='text-black' /><span>{cart[k].qty}</span><AiFillPlusSquare onClick={() => addToCart(k, 1, cart[k].name, cart[k].price, cart[k].size, cart[k].variant)} className='text-black' />
                                            </div>
                                            <div className='flex justify-end w-3/4 font-semibold p-2'>
                                                <span>Price:{cart[k].price}</span>
                                            </div>
                                        </div>
                                    </li>
                                })}
                            </ol>
                            <div className="my-2 mx-4 w=full text-right">
                                <span className='text-lg font-bold text-black'>SubTotal={subTotal}</span>
                            </div>
                        </div>
                    </div>
                    <button className="flex justify-center items-center mx-auto text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-600 rounded text-lg">Pay  ₹{subTotal}/-</button>
                </div>
            </section >
        </div >
    )
}

export default checkout
