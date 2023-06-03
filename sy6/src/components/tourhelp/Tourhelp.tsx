//@ts-nocheck
import React from "react";
import { Button, Divider, Space, Tour } from "antd";
import { useRef, useState } from "react";
import { connect } from "umi";

interface ITournode {
  ref1: object;
  ref2: object;
  ref3: object;
  ref4: object;
  [propsName: string]: any;
}

interface IRef {
  current: object;
}

const Tourhelp = (props: ITournode) => {
  const setOpen = (bool: boolean) => {
    props.dispatch({
      type: "TourhelpopenModel/changeTouropen",
      payload: {
        bool,
      },
    });
  };

  let steps = [];
  if (JSON.parse(localStorage.getItem("userdata"))?.role === '职工')
    steps = [
      {
        title: "个人中心",
        description: "在这里查看修改管理你的个人信息及项目。",
        cover: (
          <img
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />
        ),

        target: () => (props.ref1 as IRef).current,
        placement: "rightBottom",

      },
      {
        title: "项目中心",
        description: "浏览所属部门的全部项目，同时可以申请参加。",
        target: () => (props.ref2 as IRef).current,
        placement: "rightBottom",
      },

    ];
  else if (JSON.parse(localStorage.getItem("userdata"))?.role === '部门部长')
    steps = [
      {
        title: "个人中心",
        description: "在这里查看修改管理你的个人信息及项目。",
        cover: (
          <img
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />
        ),

        target: () => (props.ref1 as IRef).current,
        placement: "rightBottom",

      },
      {
        title: "项目中心",
        description: "浏览所属部门的全部项目，同时可以申请参加。",
        target: () => (props.ref2 as IRef).current,
        placement: "rightBottom",
      },
      {
        title: "部门管理",
        description: "查看部门信息，管理部门成员，管理部门项目。",
        target: () => (props.ref3 as IRef).current,
        placement: "rightBottom",

      },

    ];
  else
    steps = [
      {
        title: "个人中心",
        description: "在这里查看修改管理你的个人信息及项目。",
        cover: (
          <img
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />
        ),

        target: () => (props.ref1 as IRef).current,
        placement: "rightBottom",

      },
      {
        title: "系统管理",
        description: "查看所有部门，管理所有用户和项目。",
        target: () => (props.ref4 as IRef).current,
        placement: "rightBottom",

      },
    ];

  return (
    <>
      <Tour
        steps={steps as any}
        open={props.touropen}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    touropen: state.TourhelpopenModel.touropen,
  };
};
export default connect(mapStateToProps)(Tourhelp);
