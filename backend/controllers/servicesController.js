import { services } from '../data/beautyServices.js';
import Services from '../models/Services.js';
import mongoose from 'mongoose';

const createService = async (req, res) => {
    if (Object.values(req.body).includes('')) {
        const error = new Error('Todos los campos son obligatorios')
        return res.status(400).json({
            msg: error.message
        })
    }

    try {
        const service = new Services(req.body);
        await service.save();

        res.json({ msg: 'Eĺ servicio se registro correctamente' })
    } catch (error) {
        console.log(error)
    }
}

const getServices = (req, res) => {

    res.json(services)
}

// Validar un object id
const getServiceById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const error = new Error('El ID no es válido')
        return res.status(400).json({
            msg: error.message
        })
    }


    // Validar que exista
    const service = await Services.findById(id);
    if (!service) {
        const error = new Error('EL servicio no existe');

        return res.status(404).json({
            msg: error.message
        })
    }

    console.log(service)

    // Mostrar el servici
    res.json(service)

}


export {
    createService,
    getServices,
    getServiceById

}