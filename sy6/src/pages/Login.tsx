<<<<<<< HEAD
import React, { useEffect } from "react";
import "./css/login/login.less";
//@ts-ignore
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { log } from "console";
//@ts-ignore
import Icon from "supercons";
import Btn from "../components/btn/Btn";
import axios from "axios";
//@ts-ignore
=======
//@ts-nocheck
import React, { useEffect } from "react";
import "./css/login/login.less";
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { useState } from "react";
import { log } from "console";
import Icon from "supercons";
import Btn from "../components/btn/Btn";
import http from "@/util/http";
>>>>>>> e00c4e0 (登录注册模块)
import { Navigate, useNavigate } from "@/.umi/exports";

interface IForm {
  username: String;
  password: String;
  role: String;
  remember: boolean;
<<<<<<< HEAD

  [propName: string]: any;
}

export default function Login() {
  const [isreg, setIsreg] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [loginform] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    document.cookie.split(";").forEach((item) => {
=======
  [propName: string]: any; //前四个字段一定很有，这里[propName: string]: any; 代表后面的字段可有可无
}

export default function Login() {                          //react函数式组件
  const [isreg, setIsreg] = useState(false);           //使用useState钩子函数定义一个状态isreg用来判断当前页面是不是注册页面，默认值false
  const [messageApi, contextHolder] = message.useMessage();        //ant design 消息组件自带直接使用即可
  const [form] = Form.useForm();                                     //使用ant design 表单组件钩子函数Form.useForm()定义一个表单引用，名字自起。
  const [loginform] = Form.useForm();                                //然后把刚定义的form,loginform给158,220行的表单组件即可
  const navigate = useNavigate();                                   //固定写法,后面使用navigate('/xxx')进行路由(页面)跳转
  useEffect(() => {  
     localStorage.removeItem("userdata");                                                  //副作用函数，页面打开的同时会自动执行一次
    document.cookie.split(";").forEach((item) => {                      //30到60行都是在实现'记住我'功能,把登录信息存在cookie中，下次登录不需要输入
>>>>>>> e00c4e0 (登录注册模块)
      let arr = item.split("=");
      if (arr[0] === " remember" && arr[1] === "true") {
        autocompelete();
      }
    });
<<<<<<< HEAD
=======
 
>>>>>>> e00c4e0 (登录注册模块)
  }, []);
  const autocompelete = () => {
    document.cookie.split(";").forEach((item) => {
      let arr = item.split("=");
      if (arr[0] === " username")
<<<<<<< HEAD
        loginform.setFieldsValue({
          username: arr[1],
=======
        loginform.setFieldsValue({                                //使用上面定义的loginform引用，可以很轻松的设置清空表单的字段。
          username: arr[1],                                         //使用setFieldsValue({字段名字:修改内容})函数可以设置指定字段的值
>>>>>>> e00c4e0 (登录注册模块)
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
<<<<<<< HEAD
  const onFinish = async (values: IForm) => {

    //post
    //if()

    for (let key in values) {
      setCookie(key, values[key], 600);
    }
    let res = await axios.post('http://localhost:3000/login', values)


    if (res.data.ActionType === 'OK') {
      messageApi.open({
        type: "success",
        content: "登录成功",
      });
      navigate('/center/home')
      localStorage.setItem('userdata', JSON.stringify(Object.assign(res.data.data, { password: '******' })))
      log(Object.assign(res.data.data, { password: '******' }))
    }

    else
      messageApi.open({
        type: "error",
        content: "用户名密码不匹配",
      });

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleRegiste = async (values: IForm) => {


    setIsreg(!isreg);
    log(isreg);
    if (isreg) {
      //post
      let res = await axios.post('http://localhost:3000/register', values)
      log(res)

      if (res.data.ActionType === 'CREATED') {
=======

  const onFinish = async (values: IForm) => {      //values: IForm代表参数values是IForm类型，那么values是个对象，具体字段为15到21行定义的那些
    //values值就是表单填好的全部的数据

    for (let key in values) {                               //把登录信息存入cookie
      setCookie(key, values[key], 600);
    }
    let res: any = await http("post", "/login", values);             //注意async和await的配套使用，async代表这个函数是异步函数,await则会等当前异步语句执行完再执行下一条语句
    //向后端发起post登录请求
    if (res.data.ActionType === "OK") {                            //res.data为请求拿到的结果是个对象
      messageApi.open({                                             //固定写法，提示登录成功
        type: "success",
        content: "登录成功",
      });
      localStorage.setItem(                                              //把后端传来的用户信息存入localStorage中,注意把密码显示为'******'
        "userdata",
        JSON.stringify(Object.assign(res.data.data, { password: "******" }))
      );
      navigate("/center/home");                                       //登录成功，跳转到/center/home页面

      log(Object.assign(res.data.data, { password: "******" }));       //这是控制台打印信息      
    } else
      messageApi.open({                               //登录失败提示用户名密码不匹配
        type: "error",
        content: "用户名密码不匹配",
      });
  };

  const onFinishFailed = (errorInfo: any) => {              //表单上传失败执行的函数，组件自带，不用理
    console.log("Failed:", errorInfo);
  };
  const handleRegiste = async (values: IForm) => {
    setIsreg(!isreg);                          //将最初定义的状态isreg取反代表现在是注册页
    log(isreg);
    if (isreg) {                           //如果为注册页(true)继续


      let res = await http("post", "/register", values);              //post为请求方式,/register是接口,values是把信息传给后端
      log(res);
      //@ts-ignore
      if (res.data.ActionType === "CREATED") {
>>>>>>> e00c4e0 (登录注册模块)
        messageApi.open({
          type: "success",
          content: "注册成功",
        });
        setIsreg(!isreg);
<<<<<<< HEAD
        form.resetFields();
      }

      else
=======
        form.resetFields();                    //注册成功就把表单清空
      } else
>>>>>>> e00c4e0 (登录注册模块)
        messageApi.open({
          type: "error",
          content: "注册失败,用户已存在",
        });
<<<<<<< HEAD

    }
  };

  return (
    <div className="box">
      {contextHolder}
      <img src={require("../assets/mainbg.png")} className="login_bg" />
=======
    }
  };

  return (                               //return后面都是页面元素
    <div className="box">
      {contextHolder}                  {/*  显示消息提示，固定写法 */}
      <img
        src={require("../assets/mainbg.png")}
        className="login_bg"
        alt={""}
      />
>>>>>>> e00c4e0 (登录注册模块)
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

<<<<<<< HEAD
        <img src={require("../assets/dzlogo.png")} />
=======
        <img src={require("../assets/dzlogo.png")} alt={""} />
>>>>>>> e00c4e0 (登录注册模块)
        <div
          style={{
            backgroundColor: "white",
            width: "59%",
            padding: "30px",
            height: "30%",
            borderRadius: "10px",
          }}
<<<<<<< HEAD
        >
=======
        >  {/* 以下是条件渲染，如果状态isreg为假，渲染登录表单 */}
>>>>>>> e00c4e0 (登录注册模块)
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
              <Form.Item label="身份" name="role" initialValue="职工">
                <Select
                  style={{ width: 120 }}
                  options={[
                    { value: "职工", label: "职工" },
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
<<<<<<< HEAD
          )}
=======
          )}{/* 以下是条件渲染，如果状态isreg为真，渲染注册表单 */}
>>>>>>> e00c4e0 (登录注册模块)
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
<<<<<<< HEAD
                    validator: (value: Object, val: String) => {
=======
                    validator: (value: Object, val: String) => {               //表单自定义校验
>>>>>>> e00c4e0 (登录注册模块)
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
              <Form.Item label="身份" name="role" initialValue="职工">
                <Select
                  style={{ width: 120 }}
                  options={[
                    { value: "职工", label: "职工" },
                    { value: "部门部长", label: "部门部长" },
                    { value: "管理员", label: "管理员" },
                  ]}
                />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 5, span: 22 }}>
<<<<<<< HEAD
                <Button type="default" onClick={() => { setIsreg(false); form.resetFields(); }}>
=======
                <Button
                  type="default"
                  onClick={() => {
                    setIsreg(false);
                    form.resetFields();
                  }}
                >
>>>>>>> e00c4e0 (登录注册模块)
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
