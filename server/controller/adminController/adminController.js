const adminService=require('../../services/adminService/adminService')

const adminController={
    showUser:async(ctx)=>{
        let result=await adminService.showUser()
        if(result?.length){
            ctx.body={
                ActionType: "OK",
                data:result
            }
        }else{
            ctx.body={
                ActionType: "Failed",
            }
        }
    },
    showdep:async(ctx)=>{
        let result=await adminService.showdep()
        if(result?.length){
            ctx.body={
                ActionType:"OK",
                data:result
            }
        }else{
            ctx.body={
                ActionType:"Failed"
            }
        }
    },
    deluser:async(ctx)=>{
        let result=await adminService.delUser(ctx.request.body)
        console.log(result)
        //如果成功删除数据，就向前端返回成功的请求
        if (result.warningStatus === 1) {
            ctx.body = {
              ActionType: "delUser_OK",
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
            };
          }
    },

    showproject:async(ctx)=>{
        let result= await adminService.showproject()
        if(result?.length){
            ctx.body={
                ActionType:"OK",
                data:result
            }
        }else{
            ctx.body={
                ActionType:"Failed"
            }
        }
    }
}

module.exports=adminController