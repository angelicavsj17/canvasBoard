const moongose = require('mongoose')

const URI ='mongodb://localhost/database--test'

moongose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true
    })
.then(db => console.log('Db is connected to', db.Connection.URI))
.catch(err => console.error(err))