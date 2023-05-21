import React from "react";
import { Card } from "antd";
import Projectlist from "@/components/projectlist/Projectlist";

function Myproject(props: any) {
  return (
    <Card>
      <Card title={"我参加的项目"} style={{ marginBottom: 50 }}>
        <Projectlist />
      </Card>
      <Card title={"我负责的项目"}>
        <Projectlist />
      </Card>
    </Card>
  );
}

export default Myproject;
