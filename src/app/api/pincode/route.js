// export default function handler(req, res) {
//     res.status(200).json({ name: 'John Doe' })
// }
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json([423109, 123456, 987654, 423601]);
}