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
} from "antd";
import { useState } from "react";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Manage = () => {
  return (
    <Card>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >


        <Form.Item label="工号">
          <Input />
        </Form.Item>
        <Form.Item label="姓名">
          <Input />
        </Form.Item>
        <Form.Item label="年龄">
          <InputNumber />
        </Form.Item>
        <Form.Item label="职称">
          <Input />
        </Form.Item>
        <Form.Item label="专业">
          <Input />
        </Form.Item>
        <Form.Item label="学历">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>


        <Form.Item label="入职日期">
          <DatePicker />
        </Form.Item>


        <Form.Item
          label="上传头像"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>

        <Button type="primary">更新提交</Button>

      </Form>
    </Card>
  );
};
export default () => <Manage />;
