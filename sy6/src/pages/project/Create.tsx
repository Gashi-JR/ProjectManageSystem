//@ts-nocheck
import { Button, Card, Form, Input, message, Steps, theme, Upload } from "antd";
import { useState } from "react";
import Time from "@/util/time";
import { log } from "console";
import http from "@/util/http";
import { useNavigate } from "@/.umi/exports";

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
let data = {};

export default function Create() {
  const [isreg, setIsreg] = useState(false);
  const [contentform] = Form.useForm();
  const [coverform] = Form.useForm();
  const [introform] = Form.useForm();
  const navgate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const onFinish1 = (values: any) => {
    // message.success("创建成功!");
    if (values.intro && values.projectname) {
      Object.assign(data, values);
      setCurrent(current + 1);
    }
    console.log(data);
  };
  const onFinish2 = (values: any) => {
    //
    if (values.content) {
      Object.assign(data, values);
      setCurrent(current + 1);
    }
    console.log(data);
  };
  const onFinish3 = async (values: any) => {
    setIsreg(!isreg);
    Object.assign(data, { cover: values.cover ? values.cover : "" });
    Object.assign(data, {
      time: Time(new Date()),
      departmentid: JSON.parse(localStorage.getItem("userdata")).departmentid,
      pass: "false",
      responserid: JSON.parse(localStorage.getItem("userdata")).id,
    });

    console.log(data);
    if (isreg) {
      let res = await http("post", "/createproject", data);
      if (res.data.ActionType === "CREATE") {
        message.success("创建成功!");
        setIsreg(!isreg);
        navgate("/project/list");

      } else {
        message.error("创建失败!");
        setIsreg(!isreg);
      }
    }

  };

  const steps = [
    {
      title: "项目名称简介",
      content: (
        <Card title={"项目名称简介"}>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            style={{ maxWidth: 500 }}
            initialValues={{ remember: true }}
            onFinish={onFinish1}
            autoComplete="off"
            form={introform}
          >
            <Form.Item
              label="名称"
              name="projectname"
              rules={[
                {
                  required: true,
                  message: "请输入正确的名称",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="简介"
              name="intro"
              rules={[
                {
                  required: true,
                  message: "请输入简介",
                },
              ]}
            >
              <TextArea rows={4} maxLength={255} />
            </Form.Item>
            <Form.Item>
              {" "}
              <Button type="primary" onClick={onFinish1} htmlType="submit">
                下一步
              </Button>
            </Form.Item>
          </Form>{" "}
        </Card>
      ),
    },
    {
      title: "项目内容",
      content: (
        <Card title={"项目内容"}>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            style={{ maxWidth: 500 }}
            initialValues={{ remember: true }}
            onFinish={onFinish2}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={contentform}
          >
            <Form.Item
              label="内容"
              name="content"
              rules={[
                {
                  required: true,
                  message: "请输入内容",
                },
              ]}
            >
              <TextArea
                // rows={15}
                maxLength={2000}
                showCount={true}
                autoSize={{ minRows: 15, maxRows: 50 }}
              />
            </Form.Item>
            <Form.Item>
              {" "}
              <Button type="primary" onClick={onFinish2} htmlType="submit">
                下一步
              </Button>
            </Form.Item>
          </Form>{" "}
        </Card>
      ),
    },
    {
      title: "项目图片",
      content: (
        <Card title={"项目图片"}>
          <Form
            name="basic"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 19 }}
            style={{ maxWidth: 500 }}
            initialValues={{ remember: true }}
            onFinish={onFinish3}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={coverform}
          >
            <Form.Item
              label="上传图片"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              name="cover"
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    选择
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item>
              {" "}
              <Button type="primary" onClick={onFinish3} htmlType="submit">
                完成
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ),
    },
  ];
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <Card>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            上一步
          </Button>
        )}
      </div>
    </Card>
  );
};

