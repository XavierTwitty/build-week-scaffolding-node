const express = require('express')
const Users = require('./users-model')
const router = express.Router()
const { restricted } = require('../auth/auth-middleware')

router.get('/', restricted,  (req, res, next) => {
    Users.getAllUsers()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))


})


module.exports = router
