import Projectlist from '@/components/projectlist/Projectlist'
import http from '@/util/http';
import { Card } from 'antd'
import React, { useEffect, useState } from 'react'



export default function Allproject() {
    const [projectlist, setProjectlist] = useState<Array<object>>([]);
    const [reload, setReload] = useState(0);
    useEffect(() => {
        async function getdata() {
            let res = await http("post", "/showallproject", {});
            return res.data.data;
        }

        getdata().then((res) => setProjectlist(res));
    }, [reload]);


    function getReload(value: number) {
        setReload(value);
      }
    return (
        <Card title='所有项目'>
            <Projectlist list={{ projectlist }}  reload={{ getReload }}/>
        </Card>
    )
}