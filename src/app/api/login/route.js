import User from "../../../models/User";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');


export async function POST(req, res) {
  try {
    const body = await req.json();
    await connectDB();
    console.log("login")
    const user = await User.findOne({ email: body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secretkey123");
    const decryptpass = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (body.email===user.email && decryptpass === body.password) {
        var token = jwt.sign({ name:user.name,email:user.email,address:user.address,pincode:user.pincode,phone:user.phone }, 'jwttoken',{expiresIn: '2days'});
        return NextResponse.json({ status: 200,token , message: "success"});
      } else {
        return NextResponse.json(
          { status: 201 },
          { message: "Invalid Credentials" }
        );
      }
    } else {
      return NextResponse.json({ status: 400 }, { message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 300 }, { error: "failed to login" });
  }
}
