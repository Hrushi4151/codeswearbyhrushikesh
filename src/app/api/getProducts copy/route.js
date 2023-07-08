import product from "../../../models/Product";
import connectDB from "../../../utils/mongoose";

import { NextResponse } from 'next/server';

export async function GET() {

    try {
        connectDB();
        const product = await product.find();
        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {

        return NextResponse.json("database error occured", { status: 400 });
    }

}