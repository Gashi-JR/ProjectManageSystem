<<<<<<< HEAD
import React from 'react'
import { Card, Badge, Descriptions } from 'antd';

interface Iprops {
    userinfo: object
}
export default function Home(props: Iprops) {
    console.log(props.userinfo);

    return (
        <div>
            <Card
                title="用户信息"
                style={{
                    width: '100%',
                }}
            >
                <Descriptions layout="vertical" bordered>
                    <Descriptions.Item label="工号">Cloud Database</Descriptions.Item>
                    <Descriptions.Item label="姓名">Prepaid</Descriptions.Item>
                    <Descriptions.Item label="年龄">YES</Descriptions.Item>
                    <Descriptions.Item label="职称">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="学历">2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="专业">
                        2019-04-24 18:00:00
                    </Descriptions.Item>
                    <Descriptions.Item label="状态" span={1}>
                        <Badge status="processing" text="在线" />
                    </Descriptions.Item>
                    <Descriptions.Item label="身份" span={2}>
                     职工
                    </Descriptions.Item>
                    <Descriptions.Item label="所属部门" span={2}>$80.00</Descriptions.Item>
                    <Descriptions.Item label="用户名">$20.00</Descriptions.Item>
                    <Descriptions.Item label="头像">$20.00</Descriptions.Item>
                </Descriptions>
            </Card>

        </div>
    )
=======
//@ts-nocheck
import React from "react";
import { Card, Badge, Descriptions, Avatar } from "antd";

interface Iprops {
  userinfo: object;
}

export default function Home(props: Iprops) {
  console.log('asasasa',props.userinfo);
  const department = (id: string) => {
    switch (id) {
      case "1":
        return "部门1";
      case "2":
        return "部门2";
      case "3":
        return "部门3";
      case "4":
        return "部门4";
      default:
        return "部门5";
    }
  };

  return (
    <>
      {props.userinfo.role === "职工" && (
        <div>
          <Card
            title="用户信息"
            style={{
              width: "100%",
            }}
          >
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="工号">
                {props.userinfo.id}
              </Descriptions.Item>
              <Descriptions.Item label="姓名">
                {" "}
                {props.userinfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="电话">
                {" "}
                {props.userinfo.phone}
              </Descriptions.Item>
              <Descriptions.Item label="职称">
                {props.userinfo.title}
              </Descriptions.Item>
              <Descriptions.Item label="学历">
                {props.userinfo.education}
              </Descriptions.Item>
              <Descriptions.Item label="专业">
                {props.userinfo.major}
              </Descriptions.Item>
              <Descriptions.Item label="状态" span={1}>
                <Badge status="processing" text="在线" />
              </Descriptions.Item>
              <Descriptions.Item label="身份" span={2}>
                {props.userinfo.role}
              </Descriptions.Item>
              <Descriptions.Item label="所属部门" span={2}>
                {department(props.userinfo.departmentid)}
              </Descriptions.Item>
              <Descriptions.Item label="用户名">
                {props.userinfo.username}
              </Descriptions.Item>
              <Descriptions.Item label="头像">
                {props.userinfo.avatar === null ? (
                  <Avatar
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                    size={80}
                  />
                ) : (
                  <Avatar src={props.userinfo.avatar} size={80} />
                )}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      )}
      {props.userinfo.role === "管理员" && (
        <div>
          <Card
            title="用户信息"
            style={{
              width: "100%",
            }}
          >
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="姓名">
                {" "}
                {props.userinfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="电话">
                {" "}
                {props.userinfo.phone}
              </Descriptions.Item>

              <Descriptions.Item label="状态" span={1}>
                <Badge status="processing" text="在线" />
              </Descriptions.Item>
              <Descriptions.Item label="身份" span={2}>
                {props.userinfo.role}
              </Descriptions.Item>

              <Descriptions.Item label="用户名">
                {props.userinfo.username}
              </Descriptions.Item>
              <Descriptions.Item label="头像">
                {props.userinfo.avatar === null ? (
                  <Avatar
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                    size={80}
                  />
                ) : (
                  <Avatar src={props.userinfo.avatar} size={80} />
                )}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      )}
      {props.userinfo.role === "部门部长" && (
        <div>
          <Card
            title="用户信息"
            style={{
              width: "100%",
            }}
          >
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="姓名">
                {" "}
                {props.userinfo.name}
              </Descriptions.Item>
              <Descriptions.Item label="电话">
                {" "}
                {props.userinfo.phone}
              </Descriptions.Item>

              <Descriptions.Item label="状态" span={1}>
                <Badge status="processing" text="在线" />
              </Descriptions.Item>
              <Descriptions.Item label="身份" span={2}>
                {props.userinfo.role}
              </Descriptions.Item>
              <Descriptions.Item label="所属部门" span={2}>
                {department(props.userinfo.departmentid)}
              </Descriptions.Item>
              <Descriptions.Item label="用户名">
                {props.userinfo.username}
              </Descriptions.Item>
              <Descriptions.Item label="头像">
                {props.userinfo.avatar === null ? (
                  <Avatar
                    src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
                    size={80}
                  />
                ) : (
                  <Avatar src={props.userinfo.avatar} size={80} />
                )}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      )}
    </>
  );
>>>>>>> e00c4e0 (登录注册模块)
}
