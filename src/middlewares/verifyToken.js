 const jwt =require('jsonwebtoken')
 const config = require('../config')
 const Users =require('../models/users')

const verifyTokenUser = async (req, res, next) => {
    try {
  
        const token = req.headers['x-access-token'] //recibimos token
        console.log(token)
  
        if (!token) return res.status(403).json({ message: "no token provider" }) //aca ya se protege la ruta  se comprueba si token existe
        const decoded = jwt.verify(token, config.SECRET) // si existe token lo extraemos
        req.UserId = decoded.id
        console.log(decoded)
  
        const userValidate = await Users.findById(req.UserId, { password: 0 })
        console.log(userValidate)
        if (!userValidate) return res.status(404).json({ message: 'no user found' })

        next()
  
    } catch (error) {
        res.status(401).json({ message: 'inauthorized' })
    }
 };
 
 module.exports={verifyTokenUser}