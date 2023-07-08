import Product from "../../../models/Product";
import connectDB from '../../../utils/mongoose'

import { NextResponse } from 'next/server';

export async function GET() {

    try {
        connectDB();
        const products = await Product.find()
        // const myp = products.find()


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

        return NextResponse.json({ tshirts }, { status: 200 });
    } catch (error) {

        return NextResponse.json("database error occured", { status: 400 });
    }

}