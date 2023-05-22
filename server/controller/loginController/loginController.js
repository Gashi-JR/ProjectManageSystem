const loginService=require('../../services/loginService/loginService')
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
            };
          }
    }
}

module.exports=loginController