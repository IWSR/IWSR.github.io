import React from "react";

import { Row, Col, Form, Input, Button } from "antd";

import PreviewMarkDown from "../components/PreviewMarkDown";

const ArmyRules: React.FC = () => {
  return (
    <Form.Item name="ArmyRules">
      <>
        <h3>军队规则</h3>
        <Form.Item
          label="背景CN"
          name={["ArmyRules", "descriptionCN"]}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="背景EN"
          name={["ArmyRules", "descriptionEN"]}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <h3>rules</h3>

        <Form.List name={["ArmyRules", "rules"]}>
          {(fields, { add }) => {
            return (
              <>
                {fields.map(({ name, key }, index) => {
                  return (
                    <Form.Item key={key}>
                      <h3>规则-{index}</h3>
                      <Row gutter={24}>
                        <Col span={8}>
                          <Form.Item
                            label="labelEN"
                            name={[name, "labelEN"]}
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
                            label="labelCN"
                            name={[name, "labelCN"]}
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

                      <PreviewMarkDown
                        name={[name, "descriptionCN"]}
                        label="descriptionCN"
                      />

                      <PreviewMarkDown
                        name={[name, "descriptionEN"]}
                        label="descriptionEN"
                      />
                    </Form.Item>
                  );
                })}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{ width: "60%" }}
                  >
                    增加规则
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      </>
    </Form.Item>
  );
};

export default ArmyRules;
