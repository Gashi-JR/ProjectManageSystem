//@ts-nocheck
const MySQL_DB=require('../../DB_modules/MySQL_DB')

const depService={
    showMeb:async({departmentid})=>{
        let res
        res=await MySQL_DB.query(
            `select * from employeeinfo where departmentid=?`,
            [departmentid]
        )
        return res
    },
    showDep:async({departmentid})=>{
        let res
        let employeeNum=await MySQL_DB.query(
            `select count(*) from employeeinfo where departmentid=?`,
            [departmentid]
        ); 


         let count = employeeNum[0][0]['count(*)'];


        await MySQL_DB.query(
            `update department set employeenum=? where departmentid=?`,
            [count,departmentid]
        );
        
        res=await MySQL_DB.query(
            `select * from department where departmentid=?`,
            [departmentid]
        )
        


       let history=await MySQL_DB.query(
            `select history from dephistory where departmentid=?`,
            [departmentid]
        )

        return res[0].concat(history[0]) 
    },



    delMeb:async({userid,departmentid})=>{
        let res=await MySQL_DB.query(
            `update employeeinfo set departmentid='' where id=? and departmentid=?`,
            [userid,departmentid]
        )

        if(res[0]){
            await MySQL_DB.query(
                `update department set employeenum=employeenum-1 where departmentid=?`,
                [departmentid]
            )
        }

        return res[0] ? res[0] : { warningStatus: 1 };
    }
}

module.exports=depService