import nodemailer from "nodemailer";
import User from "../../../models/User";
import connectDB from "../../../utils/mongoose";
import { NextResponse } from "next/server";
var CryptoJS = require("crypto-js");


export async function POST(req, res) {

  if(req.body){
  try {
    const body = await req.json();
    console.log(body);
    await connectDB();

    const user = await User.findOne({ email: body });
    if (user) {

      function generateP() {
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          
        for (let i = 1; i <= 8; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);
              
            pass += str.charAt(char)
        }
          
        return pass;
    }

    const password=generateP()

    const decryptpass=CryptoJS.AES.encrypt( password,"secretkey123").toString()
    const user = await User.findOneAndUpdate({email:body},{password:decryptpass})


      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "alexandre.grady59@ethereal.email",
        pass: "dVDTJz3XjwRtysnFcG"
        },
      });

      try {
        // Send the email
        transporter.sendMail({
          from: "hrushi@gmail.com",
          to: "hrushitech51@gmail.com",
          subject: "hello hushio",
          text: "helo",
          html:`<html> <head> <style type="text/css" > .container{ display: flex; flex-direction: column; justify-content: center; align-items: center ; padding: 2rem; } img{ height: 70px; width: 170px; } </style> </head> <body> <div class='container'> <img src="data:image/png;base64,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" alt="codeswear.com" /> <h1>Reset your password</h1> <div class="main"> <p> We received a request to reset your password. </p> <h3>Password:${password}</h3> <p> Please use the above password to login to your account and change your password from Myaccount section </p> <p style="margin: 0;">To stop receiving these emails, you can <a href="https://sendgrid.com" target="_blank">unsubscribe</a> at any time.</p> <p style="margin: 0;">Your Regard,</p> <p style="margin: 0;">Codeswear.com</p> </div> </div> </body> </html>`,

        });

        console.log("Password reset email sent to:");
        return NextResponse.json({ status: 200, error: "success" });
      } catch (error) {
        console.error("Error sending password reset email:", error);
        return NextResponse.json({ status: 400, error: "failed" });
      }
    } else {
      return NextResponse.json({ status: 201, error: "user not found" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 300, error: "error" });
  }
}
else{
  return NextResponse.json({ status: 401, error: "Enter your email" });
}
}
