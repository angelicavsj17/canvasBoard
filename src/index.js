const app = require('./app')
const database =require('./data/connection')

const main  = async() =>{
  await  app.listen(3000)
  await console.log('server is running')
}

main()

