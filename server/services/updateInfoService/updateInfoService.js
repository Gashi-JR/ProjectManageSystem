const MySQL_DB = require('../../DB_modules/MySQL_DB')

const updateInfoService = {
    update: async ({ name, title, major, education, role, phone, avatar, username,departmentid }) => {
        console.log({ name, title, major, education, role, phone, avatar, username,departmentid })

        let return_res;
        switch (role) {
            case '职工':
                await MySQL_DB.query(
                    `UPDATE employeeinfo 
                      SET name=?,title=?,major=?,education=?,phone=?,avatar=?,departmentid=?
                      WHERE username=?`,
                    [name, title, major, education, phone, avatar, departmentid,username]
                );
                return_res = await MySQL_DB.query(
                    `select * from employeeinfo where username=?`
                    , [username]
                )
                break;
            case '部门部长':
                await MySQL_DB.query(
                    `UPDATE departmenter 
                          SET name=?,phone=?,avatar=?,departmentid=?
                          WHERE username=?`,
                    [name, phone, avatar, departmentid,username]
                );
                return_res = await MySQL_DB.query(
                    `select * from departmenter where username=?`
                    ,[username]
                )
                break;
            case '管理员':
                await MySQL_DB.query(
                    `UPDATE admininfo 
                    SET admininfo.name=?,admininfo.phone=?,admininfo.avatar=?
                    WHERE admininfo.username=?`,
                    [name, phone, avatar, username]
                );
                return_res = await MySQL_DB.query(
                    `select * from admininfo where username=?`
                    ,[username]
                )
                break;

        }


        return return_res[0];
    }
}


module.exports = updateInfoService

