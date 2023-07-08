import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden min-h-screen">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
                        <h2 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id:8402635</h2>
                        <p>Your Order has been Placed Succesfully...</p>
                        <div className="flex mb-4">
                            <a className="flex-grow py-2 text-lg px-1">Item Name</a>
                            <a className="flex-grow text-center py-2 text-lg px-1">Size</a>
                            <a className="flex-grow text-right py-2 text-lg px-1">Qty</a>
                            <a className="flex-grow text-right py-2 text-lg px-1">Price</a>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the code</span>
                            <span className="ml-auto text-gray-900">XL</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the code</span>
                            <span className="ml-auto text-gray-900">XL</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Wear the code</span>
                            <span className="ml-auto text-gray-900">XL</span>
                            <span className="ml-auto text-gray-900">1</span>
                            <span className="ml-auto text-gray-900">₹499</span>
                        </div>

                        <div className="flex flex-wrap justify-between my-4">
                            <span className="title-font font-medium text-2xl text-gray-900">₹1985</span>
                            <Link href={"/trackorder"}> <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">TrackOrder</button></Link>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                </div>
            </div>
        </section>
    )
}

export default page
