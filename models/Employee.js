var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  Fname: {
    type: String
  },
  Lname: {
    type: String
  },
  Mob_No: {
    type: Number
  },
  Bdate: {
    type: Date
  },
  Address: {
    type: String
  },
  Sex: {
    type: String
  },
  Salary: {
    type: Number
  },
  Dno: {
    type: Number
  },
},{
    collection: 'employee'
});

module.exports = mongoose.model('employee', Employee);