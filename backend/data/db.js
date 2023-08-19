import mongoose from "mongoose";

export const db = async () => {
    try {

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1)
    }
}