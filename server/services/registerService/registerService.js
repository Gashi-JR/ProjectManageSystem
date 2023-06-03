const MySQL_DB=require('../../DB_modules/MySQL_DB')

const registerService={
    register:async({username,password,role})=>{
        let res = {};
        let check = [];
        switch (role) {
          case '职工':
<<<<<<< HEAD
            check = await MySQL_DB.query(
=======
            check = await MySQL_DB.query(        //注册用户前先查一下用户是否已存在
>>>>>>> e00c4e0 (登录注册模块)
              "select username from employeeinfo where username=? ",
              [username]
            ); 
            //查看账号是否已经存在，如果存在就不能注册账号
<<<<<<< HEAD
            if (check[0].length) {
              break;
            } else {
=======
            if (check[0].length) {      
              break;
            } else { //如果不存在就插入一条数据,后面同理，只是根据不同的role查询/插入不同的表而已
>>>>>>> e00c4e0 (登录注册模块)
              res = await MySQL_DB.query(
                `INSERT INTO
            employeeinfo(username,password,role)
            VALUES(?,?,?)`,
                [username, password, role]
              );
              break;
            }
          case '部门部长':
            check = await MySQL_DB.query(
              "select username from departmenter where username=? ",
              [username]
            );
    
            if (check[0].length) {
              break;
            } else {
              res = await MySQL_DB.query(
                `INSERT INTO
                departmenter(username,password,role)
            VALUES(?,?,?)`,
                [username, password, role]
              );
              break;
            }
          case '管理员':
            check = await MySQL_DB.query(
              "select username from admininfo where username=? ",
              [username]
            );
            if (check[0].length) {
              break;
            } else {
              res = await MySQL_DB.query(
                `INSERT INTO
                admininfo(username,password,role)
            VALUES(?,?,?)`,
                [username, password, role]
              );
              break;
            }
        }
<<<<<<< HEAD
    
        return res[0] ? res[0] : { warningStatus: 1 };
=======
        return res[0] ? res[0] : { warningStatus: 1 };  //如果插入成功,res[0]就为真,返回res[0],否则返回{ warningStatus: 1 }给controller判断
>>>>>>> e00c4e0 (登录注册模块)
      }
}

module.exports=registerService