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