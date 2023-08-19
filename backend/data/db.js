import mongoose from "mongoose";

export const db = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://princess82:password82@cluster0.3daziy1.mongodb.net/?retryWrites=true&w=majority')
        console.log('Bd conectada correctamente')
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}