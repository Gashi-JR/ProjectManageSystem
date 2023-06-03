const registerService=require("../../services/registerService/registerService.js")

const registerController={
    register: async(ctx)=>{
        let result=await registerService.register(ctx.request.body)
        //如果成功拿到数据，就向前端返回成功的请求
<<<<<<< HEAD
        console.log(result)
        if (result.warningStatus === 0) {
=======
        if (result.warningStatus === 0) {  //warningStatus是service返回数据中固有的，不用理
>>>>>>> e00c4e0 (登录注册模块)
            ctx.body = {
              ActionType: "CREATED",
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
            };
          }
    }
}

module.exports=registerController