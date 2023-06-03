import Timelines from '@/components/timelines/Timelines'
import { Card } from 'antd'
<<<<<<< HEAD
import React from 'react'
import Infocard from '@/components/infocard/Infocard'

export default function Info() {
    return (

        <div>
            <Card title='部门历程' style={{ position: 'fixed', right: 10, bottom: 10, zIndex: 1 }}>
                <Timelines />
            </Card>
            <Infocard userinfo={{}} />
=======
import React, { useEffect, useState } from 'react'
import Depinfocard from '@/components/depinfocard/Depinfocard'
import http from '@/util/http';

export default function Info() {
     const [list, setList] = useState<Array<object>>([]);
    useEffect(() => {
        async function getdata() {
            let res = await http("post", "/showdep", {
                //@ts-ignore
                departmentid: JSON.parse(localStorage.getItem("userdata")).departmentid,
            });
            return res.data.data;
        }

        getdata().then((res) => setList(res));
    }, []);


    return (

        <div>

            <Depinfocard userinfo={list} >
               <Timelines userinfo={list}/>
            </Depinfocard>
 

>>>>>>> e00c4e0 (登录注册模块)
        </div>

    )
}
