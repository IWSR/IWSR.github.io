import React, { useState } from "react";

import { Row, Col, Form, Input, Tabs, Button } from "antd";
import type { FormInstance, TabsProps } from 'antd';

import ArmyRules from './components/ArmyRules/index';
import Detachments from './components/Detachments/index';
import Units from './components/Units/index';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '军队总规',
    children: (
      <ArmyRules />
    ),
  },
  {
    key: '2',
    label: '分队规则',
    children: (
      <Detachments />
    ),
  },
  {
    key: '3',
    label: '单位',
    children: (
      <Units />
    ),
  },
];

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const FormContext = React.createContext<null | FormInstance<any>>(null);

const FormDisabledDemo: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        layout="vertical"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
                  required: true,
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
        </Row>
        <FormContext.Provider value={form}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
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

export {
  FormContext
};
