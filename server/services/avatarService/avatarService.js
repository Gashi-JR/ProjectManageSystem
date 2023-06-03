const fs = require('fs');
const path = require('path');

const avatarService={
    savaAvatar:async(file)=>{
        return new Promise((resolve, reject) => {
            const { name, path: tempPath } = file;
            const targetPath = path.join(__dirname, '../../public/avtaruploads', name); // 指定保存的目录和文件名
        
            // 读取临时文件并写入目标路径
            const srcStream = fs.createReadStream(tempPath);
            const destStream = fs.createWriteStream(targetPath);
            srcStream.pipe(destStream);
        
            srcStream.on('end', () => {
              // 删除临时文件
              fs.unlinkSync(tempPath);
              resolve({ filename: name, path: targetPath });
            });
        
            srcStream.on('error', (error) => {
              reject(error);
            });
          });
    }
}

module.exports=avatarService