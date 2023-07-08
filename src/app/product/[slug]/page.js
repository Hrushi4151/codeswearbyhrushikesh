'use client'
import React, { useState } from 'react'
import { GlobalContext } from '../../context/Context'
// const getProduct = async (context) => {
//   await connectDB();       
//   const products = await Product.find({ category: "tshirt" }); 
//   const tshirts = {}
//   for (let item of products) {
//     if (item.title in tshirts) {
//       if (!tshirts[item.title].size.includes(item.size) && item.availableQty > 0) {
//         tshirts[item.title].size.push(item.size);
//       }
//       if (!tshirts[item.title].color.includes(item.color) && item.availableQty > 0) {
//         tshirts[item.title].color.push(item.color);
//       }
//     }
//     else {
//       tshirts[item.title] = JSON.parse(JSON.stringify(item))
//       if (tshirts[item.title].availableQty > 0) {
//         tshirts[item.title].size = [item.size];
//         tshirts[item.title].color = [item.color];
//       }
//     }
//   }
//   return { tshirts }
// }



const Page = ({ params }) => {

  // const getdata = async () => {
  //   try {
  //     const product = await fetch("http://localhost:3000/api/getProducts")
  //     const  products  = await product.json()
  //     console

  //     // let p = await 
  //     let myproduct = await products.find((item) => item.slug === params.slug)
  //     // let variants = await products.filter((item) => item.title.includes(myproduct.title))
  //     // let colorsizeslug = {}
  //     // for (let item of variants) {
  //     //   if (Object.keys(colorsizeslug).includes(item.color)) {
  //     //     colorsizeslug[item.color][item.size] = { slug: item.slug }
  //     //   }
  //     //   else {
  //     //     colorsizeslug[item.color] = {}
  //     //     colorsizeslug[item.color][item.size] = { slug: item.slug }

  //     //   }
  //     // }

  //     console.log(myproduct)
  //     console.log(variants)

  //     return { product: myproduct, variant: colorsizeslug }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const { product, variant } = getdata();
  // // console.log(product, variant)

  // const [color, setColor] = useState(product.color)
  // const [sixe, setSize] = useState(product.size)

  const { addToCart} = GlobalContext();


  const [pin, setPin] = useState();
  const [service, setService] = useState(null);
  const pinchange = (e) => {
    setPin(e.target.value);
  }
  const checkAvailability = async () => {

    let pins = await fetch('http://localhost:3000/api/pincode');
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pin))) {
      setService(true);
    }
    else {
      setService(false);
    }

  }


  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden min-h-screen">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center items-center">
            <img alt="ecommerce" className="lg:w-1/4 w-full lg:h-auto px-16 md:px-0 object-cover object-top rounded" src="https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/j/4/j/m-auk0164-ausk-original-imagzbp8thhsa5y5.jpeg?q=70" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-pink-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {/* {Object.keys(variant[color]).includes("red") && <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant[color]).includes("blue") && <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant[color]).includes("green") && <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant[color]).includes("orange") && <button className="border-2 border-gray-300 ml-1 bg-orange-400 rounded-full w-6 h-6 focus:outline-none"></button>}
                  {Object.keys(variant[color]).includes("yellow") && <button className="border-2 border-gray-300 ml-1 bg-yellow-400 rounded-full w-6 h-6 focus:outline-none"></button>} */}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center item-center">
                <span className="title-font font-medium text-2xl text-gray-900">₹756</span>
                <div className="flex  justify-around mx-auto my-4 md:my-0">
                  <button className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Buy Now</button>
                  <button onClick={() => addToCart('wear-the-code', 1, 'hrushi', 499, 'XL', 'RED')} className="flex mx-2 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Add To Cart</button>

                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-auto">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pin flex flex-wrap p-2 mx-auto my-2 justify-center items-center">
                <span className='text-lg font-semibold'>Check availability of Product in your area</span>
                <input onChange={pinchange} className='text-lg py-1 px-4 md:w-auto w-full border-gray-400 focus:outline-none rounded border-2 m-2' type="number" placeholder='Enter Pincode' />
                <button onClick={checkAvailability} className=" text-white bg-pink-500 border-0 py-2 px-4 m-2 focus:outline-none hover:bg-pink-600 rounded">Check Availability</button>
                {(service && service != null) && <span>Yeh.Product is available at this PIN</span>}
                {(!service && service != null) && <span>Sorry.Product is not available at this PIN</span>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
