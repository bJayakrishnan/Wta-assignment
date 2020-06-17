// coinRoutes.js

var express = require('express');
var EmpRoutes = express.Router();

// Require Item model in our routes module
var Coin = require('../models/Employee');

// Defined store route
EmpRoutes.route('/add').post(function (req, res) {
  let coin = new Coin(req.body);
  console.log(req.body);
   coin.save()
    .then(item => {
    res.status(200).json({'coin': 'Employee added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
EmpRoutes.route('/').get(function (req, res) {
   Coin.find(function (err, coins){
    if(err){
      console.log(err);
    }
    else {
      res.json(coins);
      console.log('GET: ' + coins);
    }
  });
});

// Defined edit route
EmpRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  console.log(id);
  Coin.findById(id, function (err, coin){
      res.json(coin);
      console.log(coin);
  });
});

//  Defined update route
EmpRoutes.route('/update/:id').post(function (req, res) {
   Coin.findById(req.params.id, function(err, coin) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      coin.Fname = req.body.Fname;
      coin.Lname = req.body.Lname;
      coin.Mob_No = req.body.Mob_No; 
      coin.Bdate = req.body.Bdate; 
      coin.Address = req.body.Address; 
      coin.Sex = req.body.Sex; 
      coin.Salary = req.body.Salary; 
      coin.Dno = req.body.Dno;

      coin.save().then(coin => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
EmpRoutes.route('/delete/:id').get(function (req, res) {
   Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin){
        console.log(req.params.id);
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = EmpRoutes;
