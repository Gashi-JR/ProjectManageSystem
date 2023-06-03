const adminRouter=require('koa-router')()
const adminController=require('../../controller/adminController/adminController');

adminRouter.post('/showuser',adminController.showUser)

adminRouter.post('/showalldep',adminController.showdep)

adminRouter.post('/deluser',adminController.deluser)

adminRouter.post('/showallproject',adminController.showproject)
module.exports=adminRouter

