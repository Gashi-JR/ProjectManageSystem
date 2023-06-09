import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Card,
  message
} from "antd";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "@/.umi/exports";
import { connect } from "umi";
import axios from "axios";
import { log } from "console";
const { RangePicker } = DatePicker;
const { TextArea } = Input;


const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
let userdata = { role: '职工' }
const Manage = (props: any) => {
  useEffect(() => {
    //@ts-ignore;
    userdata = JSON.parse(localStorage.getItem('userdata'))

  }, [])
  const [workerupdateform] = Form.useForm();
  const [updateform] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const onFinish = async (values: any) => {

    console.log(Object.assign(userdata, values))




    let res = await axios.put('http://localhost:3000/updateInfo', Object.assign(userdata,values))

console.log(res.data.data.ActionType);

    if (res.data.ActionType === 'UPDATED') {
      messageApi.open({
        type: "success",
        content: "更新成功",
      });
    props.dispatch({
      type: 'UpdatetipModel/changeUpdatetip',
      payload: {
        bool: false
      }
    })
      localStorage.setItem('userdata', JSON.stringify(Object.assign(res.data.data, { password: '******' })))
      console.log(Object.assign(res.data.data, { password: '******' }))
    }

    else
      messageApi.open({
        type: "error",
        content: "更新失败，请检查网络",
      });

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card>
      {userdata.role === '职工' && <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        style={{ maxWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={workerupdateform}
      >



        <Form.Item label="姓名" name="name"
          rules={[
            {
              required: true,
              message: "请输入正确的姓名",
              pattern: /^[\u4e00-\u9fa5]{2,10}$/gm,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="电话" name="phone"
          rules={[
            {
              required: true,
              message: "请输入有效电话",
              pattern: /^[0-9]{3,11}$/,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="职称" name="title"
          rules={[
            {
              required: true,
              message: "请输入职称",
              pattern: /^[\u4e00-\u9fa5]{2,10}$/gm,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="专业" name="major"
          rules={[
            {
              required: true,
              message: "请输入专业",
              pattern: /^[\u4e00-\u9fa5]{2,10}$/gm,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="学历" name="education"
          rules={[
            {
              required: true,
              message: "请选择学历",
            },
          ]}>
          <Select>
            <Select.Option value="本科">本科</Select.Option>
            <Select.Option value="硕士">硕士</Select.Option>
            <Select.Option value="博士">博士</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item label="入职日期" name="date"
          rules={[
            {
              required: true,
            },
          ]}>
          <DatePicker />
        </Form.Item>


        <Form.Item
          label="上传头像"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name='avatar'
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

        <Button type="primary" htmlType="submit">更新提交</Button>

      </Form>}
      {userdata.role != '职工' && <Form
        name="basic"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        style={{ maxWidth: 500 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={updateform}
      >



        <Form.Item label="姓名" name="name"
          rules={[
            {
              required: true,
              message: "请输入正确的姓名",
              pattern: /^[\u4e00-\u9fa5]{2,10}$/gm,
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="电话" name="phone"
          rules={[
            {
              required: true,
              message: "请输入有效电话",
              pattern: /^[0-9]{3,11}$/,
            },
          ]}>
          <Input />
        </Form.Item>


        <Form.Item
          label="上传头像"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          name='avatar'
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

        <Button type="primary" htmlType="submit">更新提交</Button>

      </Form>}

    </Card>
  );
};
const mapStateToProps = (state: any) => {
  return {
    updatetip: state.TourhelpopenModel.updatetip
  }

}
export default connect(mapStateToProps)(Manage)
