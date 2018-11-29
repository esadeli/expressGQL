'use strict'

const express = require('express')
const router = express.Router()
const FootballClubController = require('../controllers/FootballClubController')
const {add, list, get, edit, remove} = FootballClubController

router.post('/', add)
      .get('/list', list)
      .get('/:id', get)
      .put('/:id', edit)
      .delete('/:id', remove)

module.exports = router