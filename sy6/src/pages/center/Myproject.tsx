//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Projectlist from "@/components/projectlist/Projectlist";
import http from "@/util/http";




function Myproject(props: any) {
  const [projectlist, setProjectlist] = useState<Array<object>>([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function getdata() {
   
      let res = await http("post", "/showmyproject", {
        userid: JSON.parse(localStorage.getItem("userdata")).id,
        role: JSON.parse(localStorage.getItem("userdata")).role
      });
      return res.data.data;
    }

    getdata().then((res) => setProjectlist(res));
  }, [reload]);

  function getReload(value: number) {
    setReload(value);
  }

  return (
    <Card>
      {JSON.parse(localStorage.getItem("userdata")).role === '职工' && <Card title={"我参加的项目"} style={{ marginBottom: 50 }}>
        <Projectlist list={{ projectlist }} reload={{ getReload }} />
      </Card>}
      {JSON.parse(localStorage.getItem("userdata")).role === '部门部长' && <Card title={"我负责的项目"}>
        <Projectlist list={{ projectlist }} reload={{ getReload }} />
      </Card>}
    </Card>
  );
}

export default Myproject;
