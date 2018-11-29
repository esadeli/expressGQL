'use strict'
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_USER, ({useNewUrlParser: true}))
const app = express()

const FootballClubRouter = require('./routes/FootballClubRoutes')
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/club', FootballClubRouter)

app.get('/', (req,res)=> {
    res.status(200).json({
        message: 'OK'
    })
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Listen to port ${process.env.PORT}`)
})