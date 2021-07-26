const app = require('./app')


const main  = async() =>{
  await  app.listen(3000)
  await console.log('server is running')
}

main()

