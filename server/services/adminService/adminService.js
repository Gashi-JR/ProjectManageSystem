const MySQL_DB = require('../../DB_modules/MySQL_DB')

const adminService = {
    showUser: async () => {
        let res
        let employee = await MySQL_DB.query(
            `select * from employeeinfo`,
        );


        let departmenter = await MySQL_DB.query(
            `select * from departmenter`,
        );
        let admin = await MySQL_DB.query(
            `select * from admininfo`,
        );

        res = employee[0].concat(departmenter[0]).concat(admin[0])

        return res
    },
    showdep: async () => {
        let res = await MySQL_DB.query(
            `select * from department where departmentid!=''`
        )
        return res[0];
    },

    showproject:async()=>{
        let res=await MySQL_DB.query(
            `select * from project where pass='true'`
        )
        return res[0]
    },

    delUser: async ({ username, departmentid, role }) => {
        let res=[];
        switch (role) {
            case '职工':
                res = MySQL_DB.query(
                    `delete from employeeinfo where username=?`,
                    [username]
                );
                break;

            case '部门部长':
                res = MySQL_DB.query(
                    `delete from departmenter where username=?`,
                    [username]
                );
                break;
        }

        if (!res[0]) {
            await MySQL_DB.query(
                `update department set employeenum=employeenum-1 where departmentid=?`,
                [departmentid]
            )
        }
        return res[0] ? res[0] : { warningStatus: 1 };
    }
}

module.exports = adminService