const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy =require('../models/signupmodels')

router.post('/signup', (request, response) => {
     const signedUpUser = new signUpTemplateCopy({
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          // date: request.body.date,
          gender: request.body.gender,
          email: request.body.email,
          password:request.body.password
     })
     signedUpUser.save()
          .then(data => {
               response.json(data)
          })
          .catch(data => {
          response.json(error)
     })
})

module.exports =router