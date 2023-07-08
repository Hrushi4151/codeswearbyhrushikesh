import Product from "../../../models/Product";
import connectDB from "../../../utils/mongoose";

import { NextResponse } from 'next/server';

export async function POST(req, res) {
       
    try {
        const body = await req.json()

        console.log(body)
        // const p = new Product({
        //     title: body.title,
        //     slug: body.slug,
        //     desc: body.desc,
        //     img: body.img,  
        //     category: body.category,
        //     size: body.size,
        //     color: body.color,
        //     price: body.price,
        //     availableQty: body.availableQty,
        // });
        // console.log(p.title)
        // const body = {   

        //     "title": "wear the code112",
        //     "slug": "wear-the-code12",
        //     "desc": "desciptiodv",
        //     "img": "imageessdf",     
        //     "category": "tshirt",
        //     "size": "xl",
        //     "color": "Blue",
        //     "price": "499",
        //     "availableQty": "20"

        // }
        await connectDB();

        // console.log(bodyobj)
        // console.log("bbbbb" + bodyobj2)
        await Product.create(body);
        // for (let i = 0; i < body.length; i++) {
        //     const p = new Product({
        //         title: body.title,
        //         slug: body.slug,
        //         desc: body.desc,
        //         img: body.img,
        //         category: body.category,
        //         size: body.size,
        //         color: body.color,
        //         price: body.price,
        //         availableQty: body.availableQty,
        //     });
        // console.log("ppppp" + p);
        // await body.save();
        // }
        return NextResponse.json({ status: 200 }, { error: "success" });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 300 }, { error: "error in addproduct" });
    }


}





// import Product from "../../../models/product";
// import connectDB from "../../../utils/mongoose";

// import { NextResponse } from 'next/server';

// const POST = async (req, res) => {
//     connectDB();
//     if (req.method == 'POST') {
//         for (let i = 0; i < body.lenght; i++) {
//             let p = new Product({
//                 title: req.body.title,
//                 slug: req.body.slug,
//                 desc: req.body.desc,
//                 img: req.body.img,
//                 category: req.body.category,
//                 size: req.body.size,
//                 color: req.body.color,
//                 price: req.body.price,
//                 availableQty: req.body.availableQty,
//             })
//             await p.save();
//         }
//         return NextResponse.json({ meaasge: "succesfully" }, { status: 200 });
//     }


//     return NextResponse.json({ status: 400 }, { error: "error in addproduct" });


// }

// export default POST




// export async function POST(req, res) {

//     try {
//         // console.log(req.json());
//         // const body = req.json();
//         const {title
//             //         slug: req.body.slug,
//             //         desc: req.body.desc,
//             //         img: req.body.img,
//             //         category: req.body.category,
//             //         size: req.body.size,
//             //         color: req.body.color,
//             //         price: req.body.price,
//             //         availableQty}= req.json();
//         console.log(req.body);
//         connectDB();
//         // console.log("reqqqqq" + req, "\nressssss" + res);

//         // await Product.create(body);
//         // console.log(body)
//         // for (let i = 0; i < body.lenght; i++) {
//         //     let p = new Product({
//         //         title: req.body.title,
//         //         slug: req.body.slug,
//         //         desc: req.body.desc,
//         //         img: req.body.img,
//         //         category: req.body.category,
//         //         size: req.body.size,
//         //         color: req.body.color,
//         //         price: req.body.price,
//         //         availableQty: req.body.availableQty,
//         //     })
//         // }
//         // await p.save();
//         return NextResponse.json({ meaasge: "succesfully" }, { status: 200 });
//     } catch (error) {

//         return NextResponse.json(error, { status: 400 });
//     }

// }





// // import Product from "../../../models/product";
// // import connectDB from "../../../utils/mongoose";

// // import { NextResponse } from 'next/server';

// // const POST = async (req, res) => {
// //     connectDB();
// //     if (req.method == 'POST') {
// //         for (let i = 0; i < body.lenght; i++) {
// //             let p = new Product({
// //                 title: req.body.title,
// //                 slug: req.body.slug,
// //                 desc: req.body.desc,
// //                 img: req.body.img,
// //                 category: req.body.category,
// //                 size: req.body.size,
// //                 color: req.body.color,
// //                 price: req.body.price,
// //                 availableQty: req.body.availableQty,
// //             })
// //             await p.save();
// //         }
// //         return NextResponse.json({ meaasge: "succesfully" }, { status: 200 });
// //     }


// //     return NextResponse.json({ status: 400 }, { error: "error in addproduct" });


// // }

// // export default POST

