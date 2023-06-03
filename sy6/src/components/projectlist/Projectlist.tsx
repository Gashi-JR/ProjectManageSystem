//@ts-nocheck
<<<<<<< HEAD
import { Avatar, List, Space } from "antd";
import React from "react";

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const Projectlist = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>多多参加</b> 项目吧
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
=======
import http from "@/util/http";
import Time from "@/util/time";
import { Avatar, Button, List, Space, Tag, message } from "antd";
import React from "react";
import { useLocation } from "umi";



const Projectlist = (props) => {
  const location = useLocation()
  const [messageApi, contextHolder] = message.useMessage();
  console.log(props.list.projectlist);
  if (!props.list.projectlist)
    props.list.projectlist = props.list.checkprojectlist
  if (!props.list.projectlist && !props.list.checkprojectlist)
    props.list.projectlist = props.list.allprojectlist
  const data = Array.from({
    length: props.list.projectlist?.length,
  }).map((_, i) => ({
    title: props.list.projectlist[i].projectname,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description: props.list.projectlist[i].intro,
    content: props.list.projectlist[i].content,
    departmentid: props.list.projectlist[i].departmentid,
    projectid: props.list.projectlist[i].projectid,
    projectname: props.list.projectlist[i].projectname,
  }));



  const del = async (item) => {
    console.log(item);
    let res = await http('post', '/delproject', {
      departmentid: item.departmentid,
      projectid: item.projectid,
      time: Time(new Date()),
      departmentname: item.departmentname,
      projectname: item.projectname,
      name: JSON.parse(localStorage.getItem("userdata")).name,
      role: JSON.parse(localStorage.getItem("userdata")).role
    })

    console.log(res)
    if (res.data.ActionType === "delProject_OK") {
      props.reload.getReload(new Date());
    }
  }



  const start = async (item) => {
    console.log(item);
    let res = await http('post', '/applyproject', {
      projectid: item.projectid,
      projectname: item.projectname,
      userid: JSON.parse(localStorage.getItem("userdata")).id,
      name: JSON.parse(localStorage.getItem("userdata")).name
    })

    console.log(res)
    if (res.data.ActionType === "Apply") {
      props.reload.getReload(new Date());
      messageApi.open({
        type: 'success',
        content: '申请成功，请等待审核',
      });
    }
  }




  return (
    <div>
      {contextHolder}
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        footer={
          <div>
            <b>多多参加</b> 项目吧
          </div>
        }
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[]}
            extra={
              <div>
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />

                {JSON.parse(localStorage.getItem("userdata")).role === '职工' && !location.pathname.includes('center/myproject') && !props.list.checkprojectlist && <Button type="primary" style={{ marginLeft: 15 }} onClick={() => start(item)} >申请项目</Button>}
                {!location.pathname.includes('project/list') && JSON.parse(localStorage.getItem("userdata")).role != '职工' && <Button type="primary" danger style={{ marginLeft: 15 }} onClick={() => del(item)} >删除项目</Button>}
                {props.list.checkprojectlist && <Tag color="#2db7f5" style={{ marginLeft: 15 }}>审核中。。。</Tag>}
              </div>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}

            />
            {item.content}

          </List.Item>
        )}
      />
    </div>
  );
};
>>>>>>> e00c4e0 (登录注册模块)
export default Projectlist;
