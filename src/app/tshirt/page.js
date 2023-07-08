// 'use client'
import React from 'react'
import Link from 'next/link'
import Product from '../../models/Product'
import connectDB from '../../utils/mongoose'

const getTshirt = async (context) => {
    await connectDB();
    const products = await Product.find({ category: "tshirt" });
    const tshirts = {}
    for (let item of products) {
        if (item.title in tshirts) {
            if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
                tshirts[item.title].size.push(item.size);
            }
            if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
                tshirts[item.title].color.push(item.color);
            }
        }
        else {
            tshirts[item.title] = JSON.parse(JSON.stringify(item))
            if (tshirts[item.title].availableQty > 0) {
                tshirts[item.title].size = [item.size];
                tshirts[item.title].color = [item.color];
            }
        }
    }
    return  tshirts 
}

const Tshirt = async () => {
    const  tshirts  = await getTshirt();

    return (
        <div>
            <section className="text-gray-600 body-font min-h-screen">
                <div className="container p-8 mx-auto">
                    <div className="flex flex-wrap m-0 justify-center align-middle"> 
                        <div className="text-center w-full my-4">
                            <span className='text-pink-500 font-bold text-xl'>T-Shirts</span>
                        </div>
                        { Object.keys(tshirts).length!=0 ? Object.keys(tshirts).map((item) => {
                            console.log(item)
                            return <div key={tshirts[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-5/6 m-auto shadow-xl md:m-2">
                                <Link href={`/product/${tshirts[item].slug}`} >
                                    <a className="block relative h-30 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/j/4/j/m-auk0164-ausk-original-imagzbp8thhsa5y5.jpeg?q=70" />
                                    </a>
                                    <div className="text-center mt-4 ">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">T-Shirt</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium ">{tshirts[item].title}</h2>
                                        <p className="mt-1">Price: {tshirts[item].price}</p>
                                    </div>
                                    <div className="text-center mt-2  ">
                                        {tshirts[item].size.includes("S") && <span className='border-red-1 border-gray-400 px-1 mx-1'>S</span>}
                                        {tshirts[item].size.includes("M") && <span className='border border-gray-400 px-1 mx-1'>M</span>}
                                        {tshirts[item].size.includes("XL") && <span className='border border-gray-400 px-1 mx-1'>XL</span>}
                                        {tshirts[item].size.includes("XXL") && <span className='border border-gray-400 px-1 mx-1'>XXL</span>}
                                    </div>
                                    <div className="text-center mt-2  ">
                                        {tshirts[item].color.includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {tshirts[item].color.includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {tshirts[item].color.includes("purple") && <button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {tshirts[item].color.includes("yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                                        {tshirts[item].color.includes("orange") && <button className="border-2 border-gray-300 ml-1 bg-orange-500 rounded-full w-6 h-6 focus:outline-none"></button>}

                                    </div>
                                </Link>
                            </div>
                        
                        }) :  <div className="text-center w-full my-4">
                        <span className='text-gray-500 font-bold text-lg'>Currently Tshirts are Out of Stock</span>
                    </div>
                        }
                    </div>
                </div>
            </section >
        </div >
    )


}
export default Tshirt 
