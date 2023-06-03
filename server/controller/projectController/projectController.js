const projectService=require('../../services/projectService/projectService')

const projectController={
    show:async(ctx)=>{
        let result=await projectService.show(ctx.request.body)
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

    create:async(ctx)=>{
        let result=await projectService.create(ctx.request.body)

        if (result.warningStatus === 0) {
            ctx.body = {
              ActionType: "CREATE",
            };
          } else {
            ctx.body = {
              ActionType: "Failed",
            };
          }
    },

    show_false:async(ctx)=>{
      let result=await projectService.show_false(ctx.request.body)
      console.log(result[0])
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

    pass:async(ctx)=>{
      let result=await projectService.pass(ctx.request.body)
      //如果成功拿到数据，就向前端返回成功的请求
      console.log(result)
      if (result.warningStatus === 0) {
          ctx.body = {
            ActionType: "PASS_OK",
          };
        } else {
          ctx.body = {
            ActionType: "Failed",
          };
        }
    },

    unpass:async(ctx)=>{
      let result=await projectService.unpass(ctx.request.body)
      //如果成功拿到数据，就向前端返回成功的请求
      console.log(result)
      if (result.warningStatus === 0) {
          ctx.body = {
            ActionType: "UNPASS_OK",
          };
        } else {
          ctx.body = {
            ActionType: "Failed",
          };
        }
    },

    delproject:async(ctx)=>{
      let result=await projectService.delproject(ctx.request.body)
      if (result.warningStatus === 0) {
        ctx.body = {
          ActionType: "delProject_OK",
        };
      } else {
        ctx.body = {
          ActionType: "Failed",
        };
      }
    },
    
    apply:async(ctx)=>{
      let result=await projectService.apply(ctx.request.body)
      if (result.warningStatus === 0) {
        ctx.body = {
          ActionType: "Apply",
        };
      } else {
        ctx.body = {
          ActionType: "Failed",
        };
      }
    },

    showmyproject:async(ctx)=>{
      let result=await projectService.showmyproject(ctx.request.body)
      console.log("result[0]=")
      console.log(result[0])
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

    disagree:async(ctx)=>{
      let result=await projectService.disagree(ctx.request.body)
      if (result.warningStatus === 0) {
        ctx.body = {
          ActionType: "Disagree",
        };
      } else {
        ctx.body = {
          ActionType: "Failed",
        };
      }
    },

    agree:async(ctx)=>{
      let result=await projectService.disagree(ctx.request.body)
      if (result.warningStatus === 0) {
        ctx.body = {
          ActionType: "Agree",
        };
      } else {
        ctx.body = {
          ActionType: "Failed",
        };
      }
    },

    showapply:async(ctx)=>{
      let result=await projectService.showapply(ctx.request.body)
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
    }

}

module.exports=projectController