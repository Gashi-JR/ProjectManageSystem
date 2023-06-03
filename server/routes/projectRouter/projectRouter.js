const projectRouter=require('koa-router')()
const projectController=require('../../controller/projectController/projectController')

projectRouter.post('/showproject',projectController.show)

projectRouter.post('/createproject',projectController.create)

projectRouter.post('/showfalseproject',projectController.show_false)

projectRouter.post('/passproject',projectController.pass)

projectRouter.post('/unpassproject',projectController.unpass)

projectRouter.post('/delproject',projectController.delproject)

projectRouter.post('/applyproject',projectController.apply)

projectRouter.post('/showmyproject',projectController.showmyproject)

projectRouter.post('/agree',projectController.agree)


projectRouter.post('/disagree',projectController.disagree)

projectRouter.post('/showapply',projectController.showapply)

module.exports=projectRouter