<<<<<<< HEAD
import React, { useEffect, useRef } from "react";
//@ts-ignore
import { Menu, Space } from "antd";
import { useState } from "react";
// @ts-ignore
import { Link, useLocation } from "umi";
import { log } from "console";
//@ts-ignore
=======
//@ts-nocheck
import React, { useEffect, useRef } from "react";
import { Menu, Space } from "antd";
import { useState } from "react";
import { Link, useLocation } from "umi";
import { log } from "console";
>>>>>>> e00c4e0 (登录注册模块)
import Icon from "supercons";
import Tourhelp from "@/components/tourhelp/Tourhelp";

export default function Sidemenu() {
<<<<<<< HEAD


=======
>>>>>>> e00c4e0 (登录注册模块)
  const currentHerf = useLocation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

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
<<<<<<< HEAD
        getItem(
=======
        //@ts-ignore
        JSON.parse(localStorage.getItem("userdata"))?.role != '管理员' && getItem(
>>>>>>> e00c4e0 (登录注册模块)
          <Link to={"/center/myproject"}>我的项目</Link>,
          "/center/myproject"
        ),
        getItem(<Link to={"/center/manage"}>修改资料</Link>, "/center/manage"),
      ]
    ),
<<<<<<< HEAD
    getItem(
=======
    JSON.parse(localStorage.getItem("userdata"))?.role != '管理员' && getItem(
>>>>>>> e00c4e0 (登录注册模块)
      <div style={{ display: "flex" }} ref={ref2}>
        <Icon glyph="github" size={35} /> &nbsp;项目中心
      </div>,
      "/project",
      [
        getItem(<Link to={"/project/list"}>项目列表</Link>, "/project/list"),
<<<<<<< HEAD
        getItem(<Link to={"/project/create"}>创建项目</Link>, "/project/create"),
      ]
    ),
    getItem(
=======

        JSON.parse(localStorage.getItem("userdata"))?.role === '部门部长' && getItem(
          <Link to={"/project/create"}>创建项目</Link>,
          "/project/create"
        ),

        JSON.parse(localStorage.getItem("userdata"))?.role === '部门部长' && getItem(
          <Link to={"/project/checkuser"}>审核申请</Link>,
          "/project/checkuser"
        ),
      ]
    ),

    JSON.parse(localStorage.getItem("userdata"))?.role === '部门部长' && getItem(
>>>>>>> e00c4e0 (登录注册模块)
      <div style={{ display: "flex" }} ref={ref3}>
        <Icon glyph="controls" size={35} /> &nbsp;部门管理
      </div>,
      "/department",
      [
<<<<<<< HEAD
        getItem(<Link to={"/department/info"}>部门信息</Link>, "/department/info"),
        getItem(<Link to={"/department/check"}>入职审核</Link>, "/department/check"),
        getItem(<Link to={"/department/worker"}>部门成员</Link>, "/department/worker"),
        getItem(<Link to={"/department/deproject"}>部门项目</Link>, "/department/deproject"),
      ]
    ),
    getItem(
=======
        getItem(
          <Link to={"/department/info"}>部门信息</Link>,
          "/department/info"
        ),

        getItem(
          <Link to={"/department/worker"}>部门成员</Link>,
          "/department/worker"
        ),
        getItem(
          <Link to={"/department/deproject"}>部门项目</Link>,
          "/department/deproject"
        ),
      ]
    ),

    JSON.parse(localStorage.getItem("userdata"))?.role === '管理员' && getItem(
>>>>>>> e00c4e0 (登录注册模块)
      <div style={{ display: "flex" }} ref={ref4}>
        <Icon glyph="help" size={30} />
        &nbsp; 系统管理
      </div>,
      "/system",
      [
<<<<<<< HEAD
        getItem(<Link to={"/system/alluser"}>系统用户</Link>, "/system/alluser"),
        getItem(<Link to={"/system/alldepart"}>系统部门</Link>, "/system/alldepart"),
        getItem(<Link to={"/system/allproject"}>系统项目</Link>, "/system/allproject"),
=======
        getItem(
          <Link to={"/system/alluser"}>系统用户</Link>,
          "/system/alluser"
        ),
        getItem(
          <Link to={"/system/alldepart"}>系统部门</Link>,
          "/system/alldepart"
        ),
        getItem(
          <Link to={"/system/check"}>项目审核</Link>,
          "/system/check"
        ),
        getItem(
          <Link to={"/system/allproject"}>系统项目</Link>,
          "/system/allproject"
        ),
>>>>>>> e00c4e0 (登录注册模块)
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
<<<<<<< HEAD
      />

      <Tourhelp ref1={ref1} ref2={ref2} ref3={ref3} />
=======
        selectedKeys={[currentHerf.pathname]}
      />

      {JSON.parse(localStorage.getItem("userdata"))?.role === '职工' && <Tourhelp ref1={ref1} ref2={ref2} />}
      {JSON.parse(localStorage.getItem("userdata"))?.role === '部门部长' && <Tourhelp ref1={ref1} ref2={ref2} ref3={ref3} />}
      {JSON.parse(localStorage.getItem("userdata"))?.role === '管理员' && <Tourhelp ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} />}
>>>>>>> e00c4e0 (登录注册模块)
    </div>
  );
}
