'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FootaballClubSchema = new Schema({
    name: String,
    imageurl: String,
    league: String,
    motto: String
}, {
    timestamps: true
})

const FootballClub = mongoose.model('FootballClub', FootaballClubSchema)

module.exports = FootballClub