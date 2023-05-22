import React from "react";
// @ts-ignore
import { Navigate } from "umi";
import '@/util/axios.config'

export default function index() {
  return <Navigate to={"/center/home"} />;
}
