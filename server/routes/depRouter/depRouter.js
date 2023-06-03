const depRouter=require('koa-router')()
const depController=require('../../controller/depController/depController')
depRouter.post('/showmeb',depController.showMeb)

depRouter.post('/delmeb',depController.delMeb)

depRouter.post('/showdep',depController.showDep)


module.exports=depRouter