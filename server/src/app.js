const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())  //Security

//get request -> you also get post, put, patch, delete
app.get('/status',(req, res) => {
    res.send({
        message: 'hello world!'
    })
} )

app.listen(process.env.PORT || 8081)