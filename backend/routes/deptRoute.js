
var deptController=require('../controller/deptController')
module.exports=[

 
{
    method: 'GET',
    path: '/department', 
    config:deptController.getDeptDetails
}

]







