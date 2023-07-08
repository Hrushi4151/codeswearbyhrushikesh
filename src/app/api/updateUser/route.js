import User from "../../../models/User";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from 'next/server';
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


export async function POST(req, res) {

    try {
        await connectDB();
        const body = await req.json()
        const {name,email,address,phone,pincode,password,cpassword,exp}=body;
        const date=Math.floor(Date.now()/1000);
        let updatedexp=0;
        if(exp>date)
        {
         updatedexp=Math.floor((exp-date));
        }
        if(name && email && address && phone && pincode && password ){
                if(password===cpassword){
                const decryptpass=CryptoJS.AES.encrypt( password,"secretkey123").toString()
                const user = await User.findOneAndUpdate({email:email},{name,address,phone,pincode,password:decryptpass})
                var token = jwt.sign({ name,email,address,pincode,phone }, 'jwttoken',{expiresIn:updatedexp});
                return NextResponse.json({ status: 200,token , message: "success"});
            }
            else{
                return NextResponse.json({ status: 201 }, { error: "Fill all the details" });
            }
        }else{
            return NextResponse.json({ status: 202 }, { error: "Comfirm password does not match" });
        }
        

    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 400 }, { error: "failed to update" });
    }


}




