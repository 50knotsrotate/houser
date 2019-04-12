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
        db.init()
            .then(table => { 
                console.log('hit')
            }).catch(err => { 
                console.log(err)
            })
        console.log('connected to db')
    }).catch(err => { 
        console.log('DB failed to connect')
    })

app.get('/house/all', controller.getAllHouses)
app.post('/house/all', controller.addHouse)

app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`)
})
