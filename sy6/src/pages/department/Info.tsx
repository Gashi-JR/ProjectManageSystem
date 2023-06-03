import Timelines from '@/components/timelines/Timelines'
import { Card } from 'antd'
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
 

        </div>

    )
}
