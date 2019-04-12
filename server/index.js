require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const controller = require('./controller')

const { PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING)
    .then(db => { 
        app.set('db', db)
        console.log('connected to db')
    }).catch(err => { 
        console.log('DB failed to connect')
    })

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`)
})
