//@ts-nocheck
import React, { useState } from "react";
import { Avatar, Badge, MenuProps } from "antd";
import { Menu } from "antd";
import Btn from "../btn/Btn";
import "./topbar.less";
import { NavLink, Navigate } from "@/.umi/exports";

const items: MenuProps["items"] = [
  {
    label: (
      <img
        src={require("@/assets/logo.png")}
        style={{ marginTop: "3.5px", position: "fixed", left: 22 }}
      />
    ),
    key: "logo",
  },
  {
    label: (
      <div
        className="drag"
        style={{height: 64}}
      ></div>
    ),
    key: "drag_region",
  },
  {
    label:
      JSON.parse(localStorage.getItem("userdata"))?.avatar === null ? (
        <Avatar
          src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
          size={50}
          alt="2222"
        />
      ) : (
        <Avatar
          src={JSON.parse(localStorage.getItem("userdata"))?.avatar}
          size={50}
        />
      ),
    key: "avatar",

    children: [
      {
        label: <NavLink to={"/login"}>退出登录</NavLink>,
        key: "exit",
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "white",
      }}
    >
      <Menu
        mode="horizontal"
        items={items}
        style={{
          height: "64px",
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      />
      <Btn />
    </div>
  );
};

export default App;
