const Taks = require('../models/taks')

const getTaks = async (req,res, next) => {
    try {
        const taks = await Taks.find()
        res.status(201).json({taks})
    } catch (error) {
        console.log(error)
        next()
    }
}

const getTaksById = async (req, res, next) => {
    try {
        const tak = await Taks.findById(req.params.id)
res.status.json(200).json(tak)
    } catch (error) {
        console.log(error)
        next()
    }
}

const createTak = async (req, res, next) => {
const { body } = req 
    try {
        const tak = new Taks(body)
        await tak.save()
        res.status(201).json({mesage:'tarea agregada con exito'})  

    } catch (error) {
          console.log(error)
        next()
    }
}

const updateTakById = async (req, res, next) => {
        try {
           const updateTak = await Taks.findByIdAndUpdate(
               req.params.id,
               req.body,
               {
                   new:true
               })
           res.status(201).json({mesage:'tarea actualizada con exito'})  
        } catch (error) {
              console.log(error)
            next()
        }
    }

    const deleteTaksById = async (req,res,next) =>{
        try {
            const deleteTaks =await Taks.findByIdAndDelete(req.params.id)
            res.status(204).json()
        } catch (error) {
            console.log(error)
            next()
        }
    }

    module.exports = {
        getTaks,
        getTaksById,
        createTak,
        updateTakById,
        deleteTaksById
    }
    








