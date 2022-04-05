const express = require('express')
const Users = require('./users-model')
const router = express.Router()


router.get('/', (req, res, next) => {
    Users.getAllUsers()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))


})
// router.get('/', (req, res, next) => {

// })

module.exports = router
