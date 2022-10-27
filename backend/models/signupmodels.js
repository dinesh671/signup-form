const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
     firstName: {
          type: String,
          required:true
     },
     lastName: {
          type: String,
          required: true
     },
     date: { type: Date, default: Date.now },
     gender: {
          type: String,
          required:true
     },
     email: {
          type: String,
          required:true
     },
     password: {
          type: String,
          required:true
     },
     
})

module.exports =mongoose.model('mytable', signUpTemplate)