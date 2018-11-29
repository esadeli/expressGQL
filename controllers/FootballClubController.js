'use strict'

const FootballClub = require('../models/footballclub')

module.exports = {
	add: function (req,res) {
		FootballClub.create({
			name: req.body.name,
			imageurl: req.body.imageurl,
			league: req.body.league,
			motto: req.body.motto
		})
			.then(club => {
				res.status(201).json({
					msg: 'New club created',
					data: club
				})
			})
			.catch(err => {
				res.status(500).json({
					msg: 'ERROR Create club',
					err: err
				})
			})
	},
	list: function (req,res) {
		FootballClub.find({})
		 .then(clubs=> {
			 res.status(200).json({
				 msg: 'List of football clubs',
				 data: clubs
			 })
		 })
		 .catch(err => {
			 res.status(500).json({
				 msg: 'ERROR Get List of Clubs',
				 err: err
			 })
		 })
	},
	get: function (req,res) {
		FootballClub.findOne({
			_id: req.params.id
		})
		  .then(club => {
				res.status(200).json({
					msg: `Detail of club ${club.name}`,
					data: club
				})
			})
			.catch(err => {
				res.status(500).json({
					msg: 'ERROR Get detail data',
					err: err
				})
			})
	},
	edit: function (req,res) {
		FootballClub.findOneAndUpdate({
			_id: req.params.id
		},{
			name: req.body.name,
			imageurl: req.body.imageurl,
			league: req.body.league,
			motto: req.body.motto
		})
		  .then(club => {
				res.status(201).json({
					meg: 'Club updated',
					data: club
				})
			})
			.catch(err => {
				res.status(500).json({
					msg: 'ERROR update club',
					err: err
				})
			})
	},
	remove: function(req,res) {
		FootballClub.findOneAndDelete({
			_id: req.params.id
		})
		  .then(club => {
				res.status(201).json({
					msg: 'Club deleted',
					data: club
				})
			})
			.catch(err => {
				res.status(500).json({
					msg: 'ERROR delete club',
					err: err
				})
			})
	}
}