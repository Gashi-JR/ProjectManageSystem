import Checklist from "@/components/checklist/Checklist";
import { Card, Button } from "antd";
import React, { useEffect, useState } from "react";
import http from "@/util/http";

export default function Checkuser() {
  const [list, setList] = useState<Array<object>>([]);
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function getdata() {
      let res = await http("post", "/showapply", {
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
    <Card title="申请列表">
      <Checklist unpasslist={{ list }} reload={{ getReload }} />
    </Card>
  );
}
