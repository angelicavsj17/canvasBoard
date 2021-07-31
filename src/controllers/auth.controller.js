
const Users = require('../models/users')
const jwt = require('jsonwebtoken')
const config = require('../config')

const signUp = async (req, res, next) => {

const { userName, email, password } = req.body
const user = new Users({
    userName, email, password: await Users.encryptPassword(password)
})

const saveUser = await user.save()
return res.json({
    status: true ,
    messages: 'usuario registrado correctamente'
})   
}

const signIn = async  (req, res) =>{
    const UserFound = await Users.findOne({ email: req.body.email });
 
    if (!UserFound) return res.status(400).json({ message: 'user not found' });
     
    const matchPassword = await Users.comparePassword(req.body.password, UserFound.password)
     
    if(!matchPassword) return res.status(401).json( {message:'invalid password'})

     const tokenSignIn = jwt.sign({id: UserFound._id}, config.SECRET, {
     expiresIn:86400
    })
     
     res.json({tokenSignIn});
    
}
    module.exports = {
        signIn,
        signUp
        }
    

