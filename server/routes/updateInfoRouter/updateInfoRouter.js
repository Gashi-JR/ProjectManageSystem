const updateInfoRouter = require('koa-router')();
const updateInfoController = require('../../controller/updateInfoController/updateInfoController')


updateInfoRouter.put("/updateInfo",updateInfoController.update)

module.exports = updateInfoRouter
