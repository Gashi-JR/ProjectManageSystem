//@ts-nocheck
<<<<<<< HEAD
import { Table } from 'antd';
import { useState } from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const Checklist = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changeableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return <Table rowSelection={rowSelection} columns={columns} dataSource={data} />;
};
export default Checklist;
=======
import { Button, Table } from "antd";
import React, { useState } from "react";
import { logger } from "@umijs/utils";
import http from "@/util/http";
import { useLocation } from "@/.umi/exports";


const Checklist = (props) => {
  const location = useLocation()

  let columns = [];
  const data = [];
  if (!location.pathname.includes('checkuser')) {
    columns =
      [
        {
          title: "项目ID",
          dataIndex: "projectid",
        },
        {
          title: "项目名称",
          dataIndex: "projectname",
        },
        {
          title: "项目简介",
          dataIndex: "intro",
        },
        {
          title: "创建者",
          dataIndex: "name",
        },

      ];
    for (let i = 0; i < props.unpasslist.list?.length; i++) {
      data.push({
        key: i,
        projectid: props.unpasslist.list[i].projectid,
        projectname: props.unpasslist.list[i].projectname,
        intro: props.unpasslist.list[i].intro,
        name: props.unpasslist.list[i].name,
      });
    }

  }

  else {
    columns =
      [
        {
          title: "项目ID",
          dataIndex: "projectid",
        },
        {
          title: "项目名称",
          dataIndex: "projectname",
        },
        {
          title: "用户ID",
          dataIndex: "id",
        },
        {
          title: "用户姓名",
          dataIndex: "name",
        },
      ];
    for (let i = 0; i < props.unpasslist.list.length; i++) {
      data.push({
        key: i,
        projectid: props.unpasslist.list[i].projectid,
        projectname: props.unpasslist.list[i].projectname,
        id: props.unpasslist.list[i].userid,
        name: props.unpasslist.list[i].name
      });
    }
  }



  console.log(props.unpasslist.list);


  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const Pass = async () => {

    let selecteddata = [];
    if (!location.pathname.includes('checkuser')) {

      for (let i = 0; i < selectedRowKeys.length; i++) {
        selecteddata.push({
          projectid: data[selectedRowKeys[i]]?.projectid,
          time: props.unpasslist.list[selectedRowKeys[i]].time,
          departmentid: props.unpasslist.list[selectedRowKeys[i]].departmentid,
          projectname: props.unpasslist.list[selectedRowKeys[i]].projectname,
          name: props.unpasslist.list[selectedRowKeys[i]].name,
          role: props.unpasslist.list[selectedRowKeys[i]].role
        }
        );
      }
      console.log(selecteddata);
      let res = await http("post", "/passproject", selecteddata);
      console.log(res);
      if (res.data.ActionType === "PASS_OK") {
        props.reload.getReload(new Date());
      }
    }
    else {
      for (let i = 0; i < selectedRowKeys.length; i++) {
        selecteddata.push({
          projectid: data[selectedRowKeys[i]]?.projectid,
          projectname: data[selectedRowKeys[i]]?.projectname,
          id: data[selectedRowKeys[i]]?.id,
          name: data[selectedRowKeys[i]]?.name,

        }
        );
      }
      console.log(selecteddata);
      let res = await http("post", "/agree", selecteddata);
      console.log(res);
      if (res.data.ActionType === "Agree") {
        props.reload.getReload(new Date());
      }

    }



  };
  const reject = async () => {
    let selecteddata = [];
    if (!location.pathname.includes('checkuser')) {
      for (let i = 0; i < selectedRowKeys.length; i++) {
        selecteddata.push(data[selectedRowKeys[i]].projectid);
      } console.log(selecteddata);
      let res = await http("post", "/unpassproject", selecteddata);
      console.log(res);
      if (res.data.ActionType === "UNPASS_OK") {
        props.reload.getReload(new Date());
      }
    }

    else {
      for (let i = 0; i < selectedRowKeys.length; i++) {
        selecteddata.push({
          projectid: data[selectedRowKeys[i]].projectid,
          id: data[selectedRowKeys[i]].id
        });
      }
      console.log(selecteddata);
      let res = await http("post", "/disagree", selecteddata);
      console.log(res);
      if (res.data.ActionType === "Disagree") {
        props.reload.getReload(new Date());
      }
    }





  };
  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      <Button type="primary" style={{ marginRight: 20 }} onClick={Pass}>
        通过
      </Button>
      <Button danger type="primary" onClick={reject}>
        拒绝
      </Button>
    </>
  );
};
export default Checklist;
>>>>>>> e00c4e0 (登录注册模块)
