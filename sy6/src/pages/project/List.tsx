<<<<<<< HEAD
import React from 'react'
import Projectlist from '@/components/projectlist/Projectlist'
import { Card } from 'antd'

export default function List() {
    return (
        <Card title="全部项目">
            <Projectlist />
        </Card>
    )
=======
//@ts-nocheck
import React, { useEffect, useState } from "react";
import Projectlist from "@/components/projectlist/Projectlist";
import { Card, Tabs } from "antd";
import http from "@/util/http";

export default function List() {
  const [projectlist, setProjectlist] = useState<Array<object>>([]);
  const [checkprojectlist, setCheckprojectlist] = useState<Array<object>>([]);
  const [allprojectlist, setAllprojectlist] = useState<Array<object>>([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function getdata() {

      let res = await http("post", "/showapplyable", {
        //@ts-ignore
        userid: JSON.parse(localStorage.getItem("userdata")).id,
        //@ts-ignore
        departmentid: JSON.parse(localStorage.getItem("userdata")).departmentid,
      });

      let res1 = await http("post", "/showuserapply", {
        //@ts-ignore
        userid: JSON.parse(localStorage.getItem("userdata")).id,
      });
      let res2 = await http("post", "/showmyproject", {
        //@ts-ignore
        userid: JSON.parse(localStorage.getItem("userdata")).id,
        role: JSON.parse(localStorage.getItem("userdata")).role
      });
      return {
        res: res.data.data,
        res1: res1.data.data,
        res2: res2.data.data
      };
    }
    getdata().then((res) => {
      setProjectlist(res.res)
      setCheckprojectlist(res.res1)
      setAllprojectlist(res.res2)
    });

  }, [reload]);


  console.log('aa', projectlist);
  console.log('bb', checkprojectlist);
  console.log(allprojectlist);
  



  function getReload(value: number) {
    setReload(value);
  }


  const onChange = (key: any) => {
    console.log(key);
  };

  let items = []

  if (JSON.parse(localStorage.getItem("userdata")).role === '职工' && checkprojectlist != []) {
    console.log('cc', checkprojectlist);

    items = [
      {
        key: '1',
        label: `可申请`,
        children: (
          <Card>
            <Projectlist list={{ projectlist }} reload={{ getReload }} />
          </Card>
        ),
      },
      {
        key: '2',
        label: `待审核`,
        children: (
          <Card>
            <Projectlist list={{ checkprojectlist }} reload={{ getReload }} />
          </Card>
        ),
      }
    ];
  }
  else
  { 
     items = [
      {
        key: '1',
        label: `全部项目`,
        children: (
          <Card>
            <Projectlist list={{ allprojectlist }} reload={{ getReload }} />
          </Card>
        ),
      },
    ]
  }
   
  return (
    <Card>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Card>
  );
>>>>>>> e00c4e0 (登录注册模块)
}
