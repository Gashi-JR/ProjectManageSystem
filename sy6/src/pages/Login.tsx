import React, { useEffect } from "react";
import "./css/login/login.less";
//@ts-ignore
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { log } from "console";
//@ts-ignore
import Icon from "supercons";
import Btn from "../components/btn/Btn";

interface IForm {
  username: String;
  password: String;
  role: String;
  remember: boolean;

  [propName: string]: any;
}

export default function Login() {
  const [isreg, setIsreg] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loginform] = Form.useForm();

  useEffect(() => {
    document.cookie.split(";").forEach((item) => {
      let arr = item.split("=");
      if (arr[0] === " remember" && arr[1] === "true") {
        autocompelete();
      }
    });
  }, []);
  const autocompelete = () => {
    document.cookie.split(";").forEach((item) => {
      let arr = item.split("=");
      if (arr[0] === " username")
        loginform.setFieldsValue({
          username: arr[1],
        });
      if (arr[0] === " password")
        loginform.setFieldsValue({
          password: arr[1],
        });
      if (arr[0] === " role")
        loginform.setFieldsValue({
          role: arr[1],
        });
    });
  };
  const setCookie = (key: string, value: string, expire: number) => {
    var now = new Date();
    //设置时间
    now.setMinutes(now.getMinutes() + expire);
    document.cookie = key + "=" + value + ";expires=" + now.toUTCString();
  };
  const onFinish = (values: IForm) => {
    console.log("Received values of form: ", values);
    //post
    //if()

    for (let key in values) {
      setCookie(key, values[key], 600);
    }

    messageApi.open({
      type: "success",
      content: "登录成功",
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleRegiste = (values: IForm) => {
    console.log("file: Login.tsx:35 @ values:", values);

    setIsreg(!isreg);
    log(isreg);
    if (isreg) {
      //post
      log("发请求");
      // if(res.actionType==='Ok')
      messageApi.open({
        type: "success",
        content: "注册成功",
      });
    }
  };

  return (
    <div className="box">
      {contextHolder}
      <img src={require("../assets/mainbg.png")} className="login_bg" />
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.45)",
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "fixed", top: 0 }}>
          <Btn />
        </div>

        <img src={require("../assets/dzlogo.png")} />
        <div
          style={{
            backgroundColor: "white",
            width: "59%",
            padding: "30px",
            height: "30%",
            borderRadius: "10px",
          }}
        >
          {!isreg && (
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
              style={{ maxWidth: 500 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={loginform}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[{ required: true, message: "请输入用户名!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: "请输入密码!" }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="身份" name="role" initialValue="教职工">
                <Select
                  style={{ width: 120 }}
                  options={[
                    { value: "教职工", label: "教职工" },
                    { value: "部门部长", label: "部门部长" },
                    { value: "管理员", label: "管理员" },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 5, span: 15 }}
              >
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5, span: 22 }}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button
                  type="default"
                  style={{
                    marginLeft: "30px",
                  }}
                  //@ts-ignore
                  onClick={handleRegiste}
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          )}
          {isreg && (
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 19 }}
              style={{ maxWidth: 500 }}
              initialValues={{ remember: true }}
              onFinish={handleRegiste}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入用户名(8~20位数字或字母)",
                    pattern: /^[a-zA-Z0-9]{8,20}$/,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码(8~15位数字+字母)!",
                    pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,15}$/,
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="确认密码"
                name="password2"
                rules={[
                  { required: true },
                  {
                    validator: (value: Object, val: String) => {
                      let password = form.getFieldValue("password");
                      if (password && val === password)
                        return Promise.resolve();
                      else
                        return Promise.reject("输入的密码不一致，请重新输入");
                    },
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item label="身份" name="role" initialValue="教职工">
                <Select
                  style={{ width: 120 }}
                  options={[
                    { value: "教职工", label: "教职工" },
                    { value: "部门部长", label: "部门部长" },
                    { value: "管理员", label: "管理员" },
                  ]}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5, span: 22 }}>
                <Button type="default" onClick={() => setIsreg(false)}>
                  返回
                </Button>
                <Button
                  type="primary"
                  style={{
                    marginLeft: "30px",
                  }}
                  htmlType="submit"
                >
                  注册
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
