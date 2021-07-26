const { Schema, model } = require('mongoose')

const Tacks = new Schema(
{

title:{
type:String
},

resumen:{
Type:String
},

idUser:{
type:Number,
ref: 'id_User',
type: Schema.Types.ObjectId
}

})

module.exports=model(Tacks, lotesSchema )

  