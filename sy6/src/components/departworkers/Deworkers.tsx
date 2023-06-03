//@ts-nocheck
<<<<<<< HEAD
import { Space, Table, Tag } from 'antd';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const Deworkers = () => <Table columns={columns} dataSource={data} />;
export default Deworkers;
=======
import { Button, Space, Table, Tag, Modal } from "antd";
import http from "@/util/http";
import { useLocation } from "umi";
import { useState } from "react";
import Infocard from '@/components/infocard/Infocard'
const Deworkers = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userdata, setIsUserdata] = useState({});
  const location = useLocation()
  let columns = []
  const data = [];
  if (!location.pathname.includes('alluser')) {
    columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "联系电话",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "工号",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "职位",
        key: "title",
        dataIndex: "title",
        render: (title) => <Tag color="green">{title}</Tag>,
      },

      {
        title: "操作",
        key: "action",
        render: (_, record) => (
          <Space size="small">
            <Button type={"primary"} onClick={() => showInfo(record)}>
              查看信息
            </Button>
            <Button type={"primary"} danger onClick={() => deleteUser(record)}>
              删除
            </Button>
          </Space>
        ),
      },
    ];


    for (let i = 0; i < props.userlist.list?.length; i++) {
      data.push({
        key: i,
        name: props.userlist.list[i].name,
        phone: props.userlist.list[i].phone,
        id: props.userlist.list[i].id,
        title: props.userlist.list[i].title,
      });
    }
  }

  else {
    columns = [
      {
        title: "用户名",
        dataIndex: "username",
        key: "username",
      },
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },

      {
        title: "电话",
        dataIndex: "phone",
        key: "phone",
      },
      {
        title: "身份",
        key: "role",
        dataIndex: "role",
        render: (role) => <Tag color="green">{role}</Tag>,
      },

      {
        title: "操作",
        key: "action",
        render: (_, record) => (
          <Space size="small">
            <Button type={"primary"} onClick={() => showInfo(record)}>
              查看信息
            </Button>
            {record.role != '管理员' &&
              <Button type={"primary"} danger onClick={() => deleteUser(record)}>
                删除
              </Button>}
          </Space>
        ),
      },
    ];
    for (let i = 0; i < props.userlist.list?.length; i++) {
      data.push({
        key: i,
        username: props.userlist.list[i].username,
        name: props.userlist.list[i].name,
        phone: props.userlist.list[i].phone,
        role: props.userlist.list[i].role,
      });
    }
  }


  const showInfo = (record) => {
  console.log("file: Deworkers.tsx:121 @ record:", record)

    setIsUserdata(props.userlist.list[record.key])

    setIsModalOpen(true)


  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const deleteUser = async (item) => {
    if (!location.pathname.includes('alluser'))
      var res = await http("post", "/delmeb", {
        departmentid: props.userlist.list[item.key].departmentid,
        userid: item.id
      });
    else
      var res = await http("post", "/deluser", {
        departmentid: props.userlist.list[item.key].departmentid,
        userid: item.id,
        username: item.username,
        role: item.role
      });
    console.log(res);
    if (res.data.ActionType === "delUser_OK") {
      props.reload.getReload(new Date());
    }
  };
  console.log(props.userlist.list);


  return (
    <>
      <Table columns={columns} dataSource={data} />
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText='确定' cancelText='取消'>
        <Infocard userinfo={userdata} />
      </Modal>
    </>
  )
};
export default Deworkers;
>>>>>>> e00c4e0 (登录注册模块)
