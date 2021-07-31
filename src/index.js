require('dotenv').config()
const app = require('./app')
require('./data/connection')

//server
const main = async() => {
await app.listen(app.get('port'))
console.log('servidor de addin corriendo en el puerto:', app.get('port'))
}
main()
