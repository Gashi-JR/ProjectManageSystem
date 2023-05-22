const MySQL_DB=require('../../DB_modules/MySQL_DB')

const registerService={
    register:async({username,password,role})=>{
        let res = {};
        let check = [];
        switch (role) {
          case '职工':
            check = await MySQL_DB.query(
              "select username from employeeinfo where username=? ",
              [username]
            ); 
            //查看账号是否已经存在，如果存在就不能注册账号
            if (check[0].length) {
              break;
            } else {
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
    
        return res[0] ? res[0] : { warningStatus: 1 };
      }
}

module.exports=registerService