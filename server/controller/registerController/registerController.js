const registerService=require("../../services/registerService/registerService.js")

const registerController={
    register: async(ctx)=>{
        let result=await registerService.register(ctx.request.body)
        //如果成功拿到数据，就向前端返回成功的请求
        console.log(result)
        if (result.warningStatus === 0) {
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