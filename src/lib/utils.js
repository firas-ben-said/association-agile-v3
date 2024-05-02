import mongoose from "mongoose";

export const connectToDB = async () => {

    const connection = {};
    try {
        if (connection.isConnected){
            console.log("Using existing connection")
            return
        }
        const db = await mongoose.connect(
            process.env.MONGO
        )
        connection.isConnected = db.connections[0].readyState
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
};