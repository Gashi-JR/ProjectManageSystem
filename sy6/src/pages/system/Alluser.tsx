import Deworkers from '@/components/departworkers/Deworkers'
import http from '@/util/http';
import { Card } from 'antd'


import React, { useEffect, useState } from 'react'




export default function Alluser() {
  const [list, setList] = useState<Array<object>>([]);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    async function getdata() {
      let res = await http("post", "/showuser", {});
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
  )
}