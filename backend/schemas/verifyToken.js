const jwt = require('jsonwebtoken');
const config=require('../config')

const verifyToken=(request)=>
{
   var token=request.headers.authorization;
    var result=''
    var validToken=''
    if(!token){
        result={auth:false,msg:'No token provided'}
            return result
    }
    else{
        validToken=jwt.verify(token,config)
        result={auth:true,token:validToken}
    }

return result;

}

module.exports = verifyToken;