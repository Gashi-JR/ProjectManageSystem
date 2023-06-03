const avatarService=require('../../services/avatarService/avatarService')

const avatarController={
    update:async(ctx)=>{
        try {
            const avatarFile = ctx.request.files.image; // 获取上传的图片文件
            const result = await avatarService.saveAvatar(avatarFile); // 调用服务层方法保存图片
            ctx.body = {
              success: true,
              message: '上传成功',
              data: result,
            };
          } catch (error) {
            ctx.body = {
              success: false,
              message: '上传失败',
              error: error.message,
            };
          }
    }
}


module.exports=avatarController