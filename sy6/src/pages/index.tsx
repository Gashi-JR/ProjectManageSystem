import React from "react";
// @ts-ignore
import { Navigate } from "umi";


export default function index() {
  return <Navigate to={"/center/home"} />;
}
