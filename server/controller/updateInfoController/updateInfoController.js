const updateInfoService = require('../../services/updateInfoService/updateInfoService')


const updateInfoController = {
    update: async (ctx) => {
        console.log("updateContorller")
        let result = await updateInfoService.update(ctx.request.body)
        console.log(result[0]);
        //如果成功修改数据，就向前端返回成功的请求
        if (result.length != 0) {
            ctx.body = {
                ActionType: "UPDATED",
                data:result[0]
            };
        } else {
            ctx.body = {
                ActionType: "Failed",
            };
        }
    }
}


module.exports = updateInfoController