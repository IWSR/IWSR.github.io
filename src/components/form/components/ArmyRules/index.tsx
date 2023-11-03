import React, { useState } from "react";

import { Row, Col, Form, Input, Button } from "antd";
const { TextArea } = Input;

const ArmyRules: React.FC = () => {
  return (
    <div>
      <div>ArmyRules</div>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="descriptionCN"
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
            label="descriptionEN"
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
      <Form.Item>
        <div>ArmyRule</div>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="labelEN">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="labelCN">
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="descriptionCN">
          <TextArea />
        </Form.Item>
        <Form.Item label="descriptionEN">
          <TextArea />
        </Form.Item>
      </Form.Item>
    </div>
  );
};

export default ArmyRules;
