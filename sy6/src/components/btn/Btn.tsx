import React, { useState } from "react";
//@ts-ignore
import Icon from "supercons";
import "./Btn.less";
import { Tour } from "antd";
import { useLocation } from "@@/exports";
import { connect } from "umi";

interface IBtnprop {
  [propsName: string]: any;
}
<<<<<<< HEAD
=======
//@ts-ignore

const { ipcRenderer,remote } = window.require("electron");
console.log(remote);

function minimizeWin() {
  ipcRenderer.send("min"); // 通知主进程我要进行窗口最小化操作
}
function maximizeWin() {
  ipcRenderer.send("max"); // 通知主进程我要进行最大化 或 还原
}
function closeWin() {
  ipcRenderer.send("close"); // 通知主进程我要关闭
}
>>>>>>> e00c4e0 (登录注册模块)

function Btn(props: IBtnprop) {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("login") && (
        <Icon
          glyph="idea"
          size={32}
          className="icon"
          style={{ marginTop: "16px", position: "fixed", right: 172 }}
          onClick={() => {
            props.dispatch({
              type: "TourhelpopenModel/changeTouropen",
              payload: {
                bool: true,
              },
            });
          }}
        />
      )}
<<<<<<< HEAD
      <Icon
        glyph="terminal"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 122 }}
      />
      <Icon
=======
      <div onClick={minimizeWin}>
        <Icon
          glyph="terminal"
          size={32}
          className="icon"
          style={{ marginTop: "16px", position: "fixed", right: 122 }}
        />
      </div>
      <div onClick={maximizeWin}> <Icon
>>>>>>> e00c4e0 (登录注册模块)
        glyph="checkbox"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 72 }}
<<<<<<< HEAD
      />
      <Icon
=======
      /></div>
      <div onClick={closeWin}>  <Icon
>>>>>>> e00c4e0 (登录注册模块)
        glyph="view-close"
        size={32}
        className="icon"
        style={{ marginTop: "16px", position: "fixed", right: 22 }}
<<<<<<< HEAD
      />
=======
      /></div>


>>>>>>> e00c4e0 (登录注册模块)
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log(state.TourhelpopenModel.touropen);
  return { touropen: state.TourhelpopenModel.touropen };
};

export default connect(mapStateToProps)(Btn);
