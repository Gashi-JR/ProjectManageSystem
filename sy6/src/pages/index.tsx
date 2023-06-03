import { Spin } from "antd";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Navigate } from "umi";

export default function index() {
  return (
    <Navigate to={"/login"} />
  );
}
