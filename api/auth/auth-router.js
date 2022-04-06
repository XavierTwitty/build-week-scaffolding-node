const express = require('express')
const router = express.Router()
const User = require('../users/users-model')
const {checkRegister, checkLogin} =  require('./auth-middleware')
const makeToken = require('./token-builder')
const bcrypt = require('bcryptjs')

router.post('/register', checkRegister, (req, res, next) => {
    User.insertUser(req.body)
        .then(user => {
          return res.status(201).json(user)})
        .catch(err => next(err))
    
  })

router.post('/login', checkLogin, (req, res, next) => {
    let {password} =req.body 

    if (bcrypt.compareSync(password, req.user.password)) {
        const token = makeToken(req.user)
        res.status(200).json({ message: `${req.user.username} is back`, token })
    } else {
      next({ status: 401, message: 'Invalid Credentials' })
    }

})


module.exports = router