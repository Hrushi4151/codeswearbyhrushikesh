import React from 'react'
import Link from 'next/link'

import Product from '../../models/Product'
import connectDB from '../../utils/mongoose'

const getStickers = async (context) => {
  await connectDB();
  const products = await Product.find({ category: "sticker" });
  return { products }
}

const Stickers = async () => { 
  const { products } = await getStickers(); 

  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container p-8 mx-auto">
          <div className="flex flex-wrap m-0 justify-center align-middle">
            <div className="text-center w-full my-4">
              <span className='text-pink-500 font-bold text-xl'>Stickers</span>
            </div>
            {products.length!=0?  products.map((item) => {
              return <div key={item._id} className="lg:w-1/5 md:w-1/2 p-4 w-5/6 m-auto shadow-xl md:m-2">
                <Link href={`/product/${item.slug}`} >
                  <a className="block relative h-30 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/j/4/j/m-auk0164-ausk-original-imagzbp8thhsa5y5.jpeg?q=70" />
                  </a>
                  <div className="text-center mt-4 w- ">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Sticker</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">{item.price}</p>
                  </div>
                </Link>
              </div>
            }):  <div className="text-center w-full my-4">
            <span className='text-gray-500 font-bold text-lg'>Currently Stickers are Out of Stock</span>
        </div>
            }
          </div>
        </div>
      </section >
    </div >
  )
}

export default Stickers
