const depService=require('../../services/depService/depService')

const depController={
    showMeb:async(ctx)=>{
            let result=await depService.showMeb(ctx.request.body)
            if (result.length) {
                ctx.body = {
                  ActionType: "OK",
                  data:result[0]
                };
              } else {
                ctx.body = {
                  ActionType: "Failed",
                };
              }
    },
    
    showDep:async(ctx)=>{
        let result=await depService.showDep(ctx.request.body)
        if (result.length) {
            ctx.body = {
              ActionType: "OK",
              data:result
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
            };
          }
    },
    delMeb:async(ctx)=>{
        let result=await depService.delMeb(ctx.request.body)
        console.log("depController:")
        console.log(ctx.request.body)
        //如果成功删除数据，就向前端返回成功的请求
        if (result.warningStatus === 0) {
            ctx.body = {
              ActionType: "delMeb_OK",
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
            };
          }
    }
}

module.exports=depController