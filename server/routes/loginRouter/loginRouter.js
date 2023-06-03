const loginRouter=require('koa-router')()
<<<<<<< HEAD
const loginController=require('../../controller/loginController/loginController')

/**
 *
 * @api {post} /login 登录接口
 * @apiName login
 * @apiGroup LoginModule
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {String} role 身份,职工,部门部长,管理员
 *
 * @apiSuccess (200) {String} ActionType 成功:OK,失败:Failed
 * @apiSuccess (200) {Object} data 用户数据字段
 *
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *     username : '2100200421',
 *     password :  '1234567',
 *     role:'职工'
 * }
 *
 *
 * @apiSuccessExample {Object} Success-Response:
 * {
 *     ActionType : 'OK',
 *     data:{
 *         ...
 *          }
 * }
 *
 *
 */

loginRouter.post('/login',loginController.login)
=======
const loginController=require('../../controller/loginController/loginController')    



loginRouter.post('/login',loginController.login)    //这里的意思是响应前端post请求访问http://xxxx/login接口，
//然后就会执行loginController中的login函数,右键loginController点击转到定义进入loginController
>>>>>>> e00c4e0 (登录注册模块)

module.exports=loginRouter