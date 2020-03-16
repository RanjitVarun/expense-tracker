
var deptController = require('../controller/deptController')
module.exports = [

    {
        method: 'GET',
        path: '/department',
        config: deptController.getDeptDetails
    },
    {
        method: 'POST',
        path: '/department/create',
        config: deptController.createDept
    },
    {
        method: 'DELETE',
        path: '/department/delete',
        config: deptController.deleteDept
    }
]







