const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true })

module.exports = mongoose