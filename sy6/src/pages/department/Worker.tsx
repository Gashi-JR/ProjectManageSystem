<<<<<<< HEAD
import Deworkers from '@/components/departworkers/Deworkers'
import { Card } from 'antd'
import React from 'react'

export default function Worker() {
  return (
    <Card><Deworkers/></Card>
  )
=======
//@ts-nocheck

import Deworkers from "@/components/departworkers/Deworkers";
import { Card } from "antd";
import React, { useEffect, useState } from "react";
import http from "@/util/http";

export default function Worker() {
  const [list, setList] = useState<Array<object>>([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function getdata() {
      let res = await http("post", "/showmeb", {
        //@ts-ignore
        departmentid: JSON.parse(localStorage.getItem("userdata")).departmentid,
      });
      return res.data.data;
    }

    getdata().then((res) => setList(res));
  }, [reload]);

  function getReload(value: number) {
    setReload(value);
  }

  return (
    <Card>
      <Deworkers userlist={{ list }} reload={{ getReload }} />
    </Card>
  );
>>>>>>> e00c4e0 (登录注册模块)
}
