const jwt = require("jsonwebtoken"); //第三方jsonwebtoken库

const JWT = {
  generate(data, time) {
    //自定义generate方法生成一个token
    return jwt.sign(data, "LQC", { expiresIn: time }); //jwt.sign是自带的方法,data就是加密的数据,"LQC"就是密钥,{ expiresIn: time }是有效时间
  },
  verify(token) {
    //自定义verify方法验证一个token
    try {
      return jwt.verify(token, "LQC"); //jwt.verify为自带方法传入token和密钥，token没过期返回true，过期返回false
    } catch (error) {
      return false;
    }
  },
};

module.exports = JWT; //导出JWT对象
