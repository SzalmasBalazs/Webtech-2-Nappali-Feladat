const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Figure = new Schema({
  name: {
    type: String
  },
  amount: {
    type: Number
  },
  cost: {
    type: Number
  },
  manufacturer: {
    type: String
  }
}, {
  collection: 'figures'
})

module.exports = mongoose.model('Figure', Figure)
