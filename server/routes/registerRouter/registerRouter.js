const registerRouter=require('koa-router')();
const registerController=require('../../controller/registerController/registerController');

/**
 *
 * @api {post} /registe 注册接口
 * @apiName registe
 * @apiGroup LoginModule
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {String} username 用户名
 * @apiParam  {String} password 密码
 * @apiParam  {String} role 身份,职工,部门部长,管理员
 *
 * @apiSuccess (201) {String} ActionType 成功:CREATED,失败:Failed
 *
 * @apiParamExample  {multipart/form-data} Request-Example:
 * {
 *     username : '2100200521',
 *     password :  '1234567',
 *     role:管理员
 * }
 *
 *
 * @apiSuccessExample {Object} Success-Response:
 * {
 *     ActionType : 'CREATED'
 * }
 *
 *
 */

registerRouter.post("/register",registerController.register)

module.exports=registerRouter;