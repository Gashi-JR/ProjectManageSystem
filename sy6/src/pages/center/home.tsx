import React, { useEffect, useState } from "react";
import Infocard from "@/components/infocard/Infocard";
import { Button, Drawer, notification } from "antd";
//@ts-ignore
import Icon from "supercons";
import Btn from "@/components/btn/Btn";
import Manage from "./manage";
import { connect } from "umi";

function Home(props: any) {
  const [api, contextHolder] = notification.useNotification({
    top: 60,
  });

  const [notificate, setNotificate] = useState(true);
  useEffect(() => {
    //@ts-ignore
    console.log(JSON.parse(localStorage.getItem("userdata")).phone === "");
    //@ts-ignore

    if (JSON.parse(localStorage.getItem("userdata"))?.phone != "")
      props.dispatch({
        type: "UpdatetipModel/changeUpdatetip",
        payload: {
          bool: false,
        },
      });
    else
      props.dispatch({
        type: "UpdatetipModel/changeUpdatetip",
        payload: {
          bool: true,
        },
      });
    if (notificate) openNotification();
  }, [notificate]);

  const openNotification = () => {
    api.open({
      message: "欢迎回来!",
      description: "当你有困难时请点击帮助",
      icon: <Icon glyph="idea" size={32} />,
    });
  };
  // @ts-ignore
  const userdata = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div>
      <Infocard userinfo={userdata} />

      {contextHolder}
      <Drawer
        title="请完善个人信息以继续"
        width={"100%"}
        open={props.updatetip}
        bodyStyle={{ paddingBottom: 80 }}
        closable={false}
        placement="left"
      >
        <Manage />
      </Drawer>
    </div>
  );
}

// @ts-ignore
const mapStateToProps = (state: any) => {
  return {
    updatetip: state.UpdatetipModel.updatetip,
  };
};

// @ts-ignore
export default connect(mapStateToProps)(Home);
