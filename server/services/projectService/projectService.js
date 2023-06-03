const MySQL_DB = require('../../DB_modules/MySQL_DB')

const projectService = {
    show: async ({ departmentid }) => {
        console.log({ departmentid })

        let res = await MySQL_DB.query(
            `select * from project where pass='true' and departmentid=?`,
            [departmentid]
        );

        return res
    },

    create: async ({ projectname, departmentid, responserid, pass, content, intro, cover, time }) => {
        let res = {};
        res = await MySQL_DB.query(
            `INSERT INTO
          project(projectname,departmentid,responserid,content,intro,pass,cover,time)
          VALUES(?,?,?,?,?,?,?,?)`,
            [projectname, departmentid, responserid, content, intro, pass, cover, time]
        );

        return res[0] ? res[0] : { warningStatus: 1 };
    },

    showmyproject: async ({ userid, role }) => {
        let res_temp = await MySQL_DB.query(
            `select projectid from joininfo where userid=null`,
        )

        let res
        switch (role) {
            case '职工':

                let pid = await MySQL_DB.query(
                    `select projectid from joininfo where userid=?`,
                    [userid]
                )



                for (let i = 0; i < pid[0].length; i++) {
                    let temp = await MySQL_DB.query(
                        `select * from project where projectid=? and pass='true'`,
                        [pid[0][i]['projectid']])



                    res_temp[0] = res_temp[0].concat(temp[0])


                }
                res = res_temp

                break;

            case '部门部长':

                 res = await MySQL_DB.query(
                    `select * from project where responserid=?`,
                    [userid]
                )
        }

        return res


    },

    show_false: async ({ departmentid }) => {
        let res = await MySQL_DB.query(
            `select * from project where pass='false' and departmentid=?`,
            [departmentid]
        );
        return res
    },
    pass: async (list) => {
        let res
        let flag = true  //判断每个更新是否成功
        for (var i = 0; i < list.length; i++) {
            res = await MySQL_DB.query(
                `update project set pass='true' where projectid=? and pass='false'`,
                [list[i].projectid]
            );
            //如果插入成功，就往history表里添加部门的历程，相当于一个触发器
            if (res[0]) {
                let history = `${list[i].name}  [${list[i].role}]  创建了项目《${list[i].projectname}》------${list[i].time}`
                await MySQL_DB.query(
                    `insert into
                    dephistory(history,departmentid)
                    values(?,?);`,
                    [history, list[i].departmentid]
                );
                await MySQL_DB.query(
                    `update department set projectnum=projectnum+1 where departmentid=?;`,
                    [list[i].departmentid]
                )

            }
            if (res[0] == false) {
                flag = false
            }
        }

        return flag ? res[0] : { warningStatus: 1 };
    },

    unpass: async (list) => {
        let res
        let flag = true  //判断每个删除是否成功
        for (var i = 0; i < list.length; i++) {
            res = await MySQL_DB.query(
                `delete from project where projectid=? and pass='false'`,
                [list[i]]
            );
            if (res[0] == false) {
                flag = false
            }
        }

        return flag ? res[0] : { warningStatus: 1 };
    },

    delproject: async ({ name, projectname, projectid, departmentid, time, role }) => {
        let res = await MySQL_DB.query(
            `delete from project where departmentid=? and projectid=?`,
            [departmentid, projectid]
        )


        await MySQL_DB.query(
            'update department set projectnum=projectnum-1 where departmentid=?',
            [departmentid]
        )


        let history = `${name} [${role}] 删除了项目《${projectname}》------${time}`

        await MySQL_DB.query(
            `insert into
                dephistory(history,departmentid)
                values(?,?);`,
            [history, departmentid]
        )


        return res[0] ? res[0] : { warningStatus: 1 };
    },
    apply: async ({ userid, projectid,name,projectname }) => {
        let res = await MySQL_DB.query(
            `insert into apply(userid, projectid,name,projectname)
            values
            (?,?,?,?)
            `,
            [userid, projectid,name,projectname]
        )

        return res[0] ? res[0] : { warningStatus: 1 };
    },

    //拒绝某人加入项目
    disagree:async(list)=>{
        let res
        for(var i=0;i<list.length;i++){
            res=await MySQL_DB.query(
                `delete from apply where userid=? and projectid=?`,
                [list[i].id,list[i].projectid]
            )
        }



        return res[0] ? res[0] : { warningStatus: 1 };
    },

    //同意某人加入项目
    agree:async(list)=>{

        let res
        for(var i=0;i<list.length;i++){
           res= await MySQL_DB.query(
                `insert into joininfo(userid,projectid,role)
                values
                (?,?,"职工"))`,
                [list[i].id,list[i].projectid]
            )
        }

        for(var i=0;i<list.length;i++){
           res= await MySQL_DB.query(
                `delete from apply where userid=? and projectid=?`,
                [list[i].id,list[i].projectid]
            )
        }

        return res[0] ? res[0] : { warningStatus: 1 };

    },
    showapply:async({departmentid})=>{
        
        let res = await MySQL_DB.query(
            `select * from apply 
            where projectid in (select projectid from project where departmentid=? and pass='true')`,
            [departmentid]
        )
        
        return res
    }

}
module.exports = projectService