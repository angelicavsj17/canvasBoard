const { Schema, model } = require('mongoose')

const taksSchema = new Schema(
{

title:{
type:String
},

resumen:{
Type:String
},

idUserTak:{
type:String,
ref: 'Users',
type: Schema.Types.ObjectId
}
})

module.exports=model("Tacks", taksSchema )

  