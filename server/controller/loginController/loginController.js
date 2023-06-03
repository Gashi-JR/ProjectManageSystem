const loginService=require('../../services/loginService/loginService')
<<<<<<< HEAD
const JWT=require("../../util/JWT.JS")
const loginController={
    login:async(ctx)=>{
        let result=await loginService.login(ctx.request.body);
        if (result.length) {
            const token = JWT.generate(result[0], "5h");
            ctx.set("Authorization", token);
            ctx.body = {
              ActionType: "OK",
              data: result[0],
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
=======
//@ts-ignore
const JWT=require("../../util/JWT.js")     
const loginController={
    login:async(ctx)=>{       //login为异步函数(async),参数ctx是框架给你的，直接用
        let result=await loginService.login(ctx.request.body); //用result保存loginService的login函数传来的结果，ctx.request.body就是前端post请求传过来的数据
        console.log(result)   //待会右键loginService点击转到定义进入loginService
        if (result.length) {               //如果结果不为空说明数据库查有此人
            const token = JWT.generate(result[0], "5h");  //使用util/jwt.js封装的函数生成一个token,result[0]就是要加密的信息,5h就是到期时间
            ctx.set("Authorization", token);  //然后通过ctx.set方法把token放入响应头的Authorization字段给前端返回过去
            ctx.body = {             //ctx.body方法返回具体数据给前端
              ActionType: "OK",       //字段名称内容都是自定义的 比如 ActionType ,data等 
              data: result[0],          //result[0]是上面loginService返回来的当前登录用户信息
            };
          } else {
            ctx.body = {
              ActionType: "Failed",   //没查到人就给前端返回 ActionType: "Failed"
>>>>>>> e00c4e0 (登录注册模块)
            };
          }
    }
}

module.exports=loginController