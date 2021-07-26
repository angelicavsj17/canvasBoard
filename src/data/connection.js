const moongose = require('mongoose')

moongose.connect('mongo://mongo/database--test')
.then(db => console.log('Db is connected to', db.Connection.host))
.catch(err => console.error(err))