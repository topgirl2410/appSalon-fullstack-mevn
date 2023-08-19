import mongoose from "mongoose";

const servicesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    }
})

const Services = mongoose.model('Sevices', servicesSchema);

export default Services;