import React, { useEffect, useRef } from "react";
//@ts-ignore
import { Menu, Space } from "antd";
import { useState } from "react";
// @ts-ignore
import { Link, useLocation } from "umi";
import { log } from "console";
//@ts-ignore
import Icon from "supercons";
import Tourhelp from "@/components/tourhelp/Tourhelp";

export default function Sidemenu() {
  const [openKeys, setOpenKeys] = useState([""]);
  useEffect(() => {
    setOpenKeys(["/" + currentHerf.pathname.split("/")[1]]);
  }, []);
  const currentHerf = useLocation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  function getItem(
    label: string | JSX.Element,
    key: string,
    children?: any,
    type?: any
  ) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem(
      <div style={{ display: "flex" }} ref={ref1}>
        <Icon glyph="person" size={40} /> 个人中心
      </div>,
      "/center",
      [
        getItem(<Link to={"/center/home"}>我的信息</Link>, "/center/home"),
        getItem(
          <Link to={"/center/myproject"}>我的项目</Link>,
          "/center/myproject"
        ),
        getItem(<Link to={"/center/manage"}>修改资料</Link>, "/center/manage"),
      ]
    ),
    getItem(
      <div style={{ display: "flex" }} ref={ref2}>
        sub2
      </div>,
      "sub2",
      [
        getItem("Option 5", "5"),
        getItem("Option 6", "6"),
        getItem("Submenu", "sub3", [
          getItem("Option 7", "7"),
          getItem("Option 8", "8"),
        ]),
      ]
    ),
    getItem(
      <div style={{ display: "flex" }} ref={ref3}>
        sub3
      </div>,
      "sub4",
      [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]
    ),
  ];

  return (
    <div>
      <Menu
        mode="inline"
        style={{
          width: 200,
          height: "calc(100vh - 64px)",
        }}
        items={items}
        defaultOpenKeys={["/" + currentHerf.pathname.split("/")[1]]}
        defaultSelectedKeys={[currentHerf.pathname]}
      />

      <Tourhelp ref1={ref1} ref2={ref2} ref3={ref3} />
    </div>
  );
}
