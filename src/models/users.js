const { Schema, model } = require('mongoose')
const bcrypt =require('bcrypt')

const userSchema = new Schema(

{

userName:{
type:String
},

email:{
type:String
},

password:{
type:String
}
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10); //method gensalt algoritmo repeat 10 // mientras mas repite mas consumo
    return await bcrypt.hash(password, salt); //method hash encrypt password
}

userSchema.statics.comparePassword = async (password, receivedPassword) =>{
    return await bcrypt.compare(password, receivedPassword)  //method compare receives 2 params
   }
   
   
module.exports=model("Users", userSchema )
                                                                          