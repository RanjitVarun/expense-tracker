
const jwt = require('jsonwebtoken');
const secret = require('../config');

function createToken(user) {
    console.log('token')
    console.log(user)
  let scopes='admin'
  return jwt.sign({name: user.name,password:user.password, scope:scopes }, secret, { algorithm: 'HS256', expiresIn: "5h" } );
}

module.exports = createToken;