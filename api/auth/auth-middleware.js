const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../secrets')
const bcrypt = require('bcryptjs')
const {BCRYPT_ROUNDS} = require('../secrets')
const User = require('../users/users-model')
const makeToken = require('./token-builder')

const restricted = (req, res, next) => {

      const token =  req.headers.authorization
      if (!token) {
        next({status: 401 , message: "Token required"})
      } else {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
          if (err) {
            next({status: 401, message: "Token invalid"})
          } else {
            req.decodedjwt = decoded
            next()
          }
        })
      }
  }

  const checkRegister = (req, res, next) => {
      const {username , password} =  req.body
      if(!username || !password) {
        next({status: 401, message:"username and password required"})   
      } else {
        req.body.password = bcrypt.hashSync(password, BCRYPT_ROUNDS)
        User.getBy('username', username) 
            .then(user => {
                if(user){
                    next({status: 400, message: 'This username is already registered'})
                } else {
                    next()
                }
            })
      }
  }

  const checkLogin = (req, res, next) => {
    const {username , password} =  req.body
    if(!username || !password){
        next({status: 401, message:"username and password required"})
    } else {
        User.getBy('username', username)
            .then(user => {
                if(user && bcrypt.compareSync(password, user.password)){
                    const token = makeToken(req.user)
                    req.token = token 
                }
            })
    }
  }

  module.exports ={
      restricted,
      checkRegister,
      checkLogin,
  }