import React, { useState } from "react";

import { Row, Col, Form, Input } from "antd";

import ArmyRules from './components/ArmyRules/index';
import Detachments from './components/Detachments/index';
import Units from './components/Units/index';

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
        layout="horizontal"
        form={form}
        style={{ width: "100%" }}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="version"
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
        <ArmyRules />
        <Detachments />
        <Units />
      </Form>
    </div>
  );
};

export default FormDisabledDemo;
