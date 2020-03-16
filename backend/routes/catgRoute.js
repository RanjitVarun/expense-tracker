
var catgController = require('../controller/catgController')
module.exports = [

    {
        method: 'GET',
        path: '/category',
        config: catgController.getCategoryDetails
    },
    {
        method: 'POST',
        path: '/category/create',
        config: catgController.createCategory
    },
    {
        method: 'DELETE',
        path: '/category/delete',
        config: catgController.deleteCategory
    }
]







