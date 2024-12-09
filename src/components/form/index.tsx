import React, { useEffect, useState } from "react";

import { Row, Col, Form, Input, Tabs, Button, Select, Radio } from "antd";
import { Upload, message } from "antd";
import type { FormInstance, TabsProps } from "antd";

import ArmyRules from "./components/ArmyRules/index";
import Detachments from "./components/Detachments/index";
import Units from "./components/Units/index";
import PreviewMarkDown from "./components/components/PreviewMarkDown/index";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "军队总规",
    forceRender: true,
    children: <ArmyRules />,
  },
  {
    key: "2",
    label: "分队规则",
    forceRender: true,
    children: <Detachments />,
  },
  {
    key: "3",
    label: "单位",
    forceRender: true,
    children: <Units />,
  },
];

const onFinish = (values: any) => {
  console.log("Success:", values);
  const jsonString = JSON.stringify(values);
  const blob = new Blob([jsonString], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${values.FactionCN}-${values.version}.json`; // 设置下载文件的名称
  a.click();
  URL.revokeObjectURL(a.href);
};

const FormContext = React.createContext<null | FormInstance<any>>(null);

const FormDisabledDemo: React.FC = () => {
  const [form] = Form.useForm();
  const [, setFileData] = useState(null);

  useEffect(() => {
    form.setFieldsValue({
      isSM: false,
      isNeverRebel: true
    });
  });

  const beforeUpload = (file) => {
    // 检查文件类型是否为JSON
    console.log(file, "file");
    const isJSON = file.type === "application/json";

    if (!isJSON) {
      message.error("只能上传JSON文件！");
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        console.log(e);
        const jsonData = JSON.parse(e.target.result);
        console.log(jsonData, "jsonData");
        setFileData(jsonData);
        form.setFieldsValue(jsonData);
        message.success("JSON 文件上传成功！");
      } catch (error) {
        console.log(error);
        message.error("无法解析 JSON 文件！");
      }
    };
    reader.readAsText(file);

    return isJSON;
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Upload beforeUpload={beforeUpload}>
        <Button>上传 JSON 文件</Button>
      </Upload>
      <Form
        layout="vertical"
        form={form}        
        style={{ width: "100%" }}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="version"
              name="version"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="Faction"
              name="Faction"
              rules={[
                {
                  message: "Input something!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="FactionCN"
              name="FactionCN"
              rules={[
                {
                  required: true,
                  message: "Input something!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="允许联军" name="specialAgent">
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="是否与星际战士codex相关" name="isSM" tooltip="可以使用星际战士codex的战团">
              <Radio.Group defaultValue={false}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <PreviewMarkDown name="supplementaryInstructions" label="更新说明 & 感谢列表"/>
        <FormContext.Provider value={form}>
          <Tabs defaultActiveKey="1" items={items} />
        </FormContext.Provider>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormDisabledDemo;

export { FormContext };
