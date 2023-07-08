import mongoose from 'mongoose'

// const connectDB = async (handler) => {
//     if (mongoose.connections.readyState) {
//         return handler(req, res)
//     }
//     await mongoose.conect(process.env.MONGO_URI)
//     return handler(req, res);
// }

// export default connectDB;


const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
    throw new Error(
        "please define evn variable"
    )
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { con: null, promise: null }
}

const dbconnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }


    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }


    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn
}


export default dbconnect;