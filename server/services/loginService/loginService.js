<<<<<<< HEAD
const MySQL_DB=require('../../DB_modules/MySQL_DB')

const loginService={
    login:async({username,password,role})=>{
        let res=[];
        switch(role){
            case '职工':
                res=await MySQL_DB.query(
                    "select * from employeeinfo where username=? and password=? and role=?" ,
                    [username,password,role]
                );
                break;

            case '部门部长':
                res=await MySQL_DB.query(
                    "select * from departmenter where username=? and password=? and role=?",
                    [username,password,role] 
                );
                break;
            
            case '管理员' :
                res=await MySQL_DB.query(
                    "select * from admininfo where username=? and password=? and role=?",
                    [username,password,role]
                );
                break;
        }
        return res[0];
    }
}

module.exports=loginService
=======
const MySQL_DB = require("../../DB_modules/MySQL_DB");

const loginService = {
  login: async ({ username, password, role }) => {
    //这里{username,password,role}就是解构controller中ctx.request.body（前端post请求传过来的数据）
    console.log({ username, password, role });
    let res = []; //定义空数组存数据库查询结果
    switch (
      role //根据不同角色查不同的表
    ) {
      case "职工":
        res = await MySQL_DB.query(
          //MySQL_DB.query方法固定在下面写sql语句, 问号?就是占位符，跟后面[username,password,role]中的一一对应
          `select * from employeeinfo,department where username=? and password=? and role=? and employeeinfo.departmentid=department.departmentid`,
          [username, password, role]
        );
        break;

      case "部门部长":
        res = await MySQL_DB.query(
          `select * from departmenter,department where username=? and password=? and role=? and departmenter.departmentid=department.departmentid`,
          [username, password, role]
        );
        break;

      case "管理员":
        res = await MySQL_DB.query(
          `select * from admininfo where username=? and password=? and role=?`,
          [username, password, role]
        );
        break;
    }
    console.log(res);
    return res[0]; //查完最后把数据返回给controller
  },
};

module.exports = loginService;
>>>>>>> e00c4e0 (登录注册模块)
