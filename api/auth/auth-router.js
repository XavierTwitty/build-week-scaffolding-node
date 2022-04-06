const express = require('express')
const router = express.Router()
const User = require('../users/users-model')
const {checkRegister} =  require('./auth-middleware')

router.post('/register', checkRegister, (req, res, next) => {
    User.insertUser(req.body)
        .then(user => {
          return res.status(201).json(user)})
        .catch(err => next(err))
    
  })


module.exports = router