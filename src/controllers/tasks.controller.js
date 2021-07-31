const Taks = require('../models/taks')

const getTaks = async (req,res, next) => {
    const userId = req.userId
    const taks = await Taks.find({"idUserTak":  userId});
    return res.json({
        status: true,
        taks: taks
        
    })
    
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
const {title, resumen }= req.body
const userId = req.userId

const tak =await  new Taks({
title, resumen, "idUserTak":userId
})

tak.save()

res.status(201).json({mesage:'tarea agregada con exito'})  
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
            res.status(204).json({message:'tarea eliminada con exito'})
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
    








