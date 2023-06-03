const avtarRouter=require('koa-router')()
const avatarController=require('../../controller/avatarController/avatarController')
const multer =require('multer')
const upload=multer({dest:'../../public/avtaruploads/'})

avtarRouter.post("/updateInfo",avatarController.update)

module.exports=avtarRouter


