const User = require('../models/user.model');
const bcrypt = require('bcrypt');

// app.post('/user/add', () => user.add)
exports.add = function (req, res) {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (username == undefined || req.body.password == undefined || 
    firstName == undefined || lastName == undefined) {
    res.status(400).send('Invalid input');
  } 

  bcrypt.hash(req.body.password, 10, function(err, password) {
    User({
      username,
      password,
      firstName,
      lastName,
    }).save()
    .then(() => res.json('User Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
}

// app.get('/user/?ID=)