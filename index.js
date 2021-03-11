require('dotenv').config()
const path = require('path')
console.log('web 39 rules')

const express = require('express')



const server = express()

server.use(express.json())
server.use(express.static( path.join(__dirname, 'client/build') ))

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV !== 'development'){ // on Heroku machin, an env variable is called "NODE_ENV" -> "production"
     const cors = require('cors')
    server.use(cors())
}

server.get('/api/hello', (req, res) => {
    res.json({message: 'hello'})
})

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))    
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})
