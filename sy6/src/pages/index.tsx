<<<<<<< HEAD
import React from "react";
// @ts-ignore
import { Navigate } from "umi";


export default function index() {
  return <Navigate to={"/center/home"} />;
=======
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Navigate } from "umi";

export default function index() {
  return (
    <Navigate to={"/login"} />
  );
>>>>>>> e00c4e0 (登录注册模块)
}
