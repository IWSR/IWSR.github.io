import React from "react";

import { Row, Col, Form, Input, Button } from "antd";
const { TextArea } = Input;

const Detachments: React.FC = () => {
  return (
    <div>
      <div>Detachments</div>
      <Form.List
        name="rules"
      >
        {(fields, { add }) => {
          return (
            <>
              {fields.map((item, index) => {
                return (
                  <Form.Item>
                    <div>Detachment-{index}</div>
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="name">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="nameCn">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={24}>
                      <Col span={8}>
                        <Form.Item label="abilityNameEN">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item label="abilityNameCN">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item label="abilityDescriptionCN">
                      <TextArea />
                    </Form.Item>
                    <Form.Item label="abilityDescriptionEN">
                      <TextArea />
                    </Form.Item>
                    <Form.List name="ENHANCEMENTS">
                      {
                        (fields, { add }) => {
                          return (
                            <>
                              {fields.map((item, index) => {
                                return (
                                  <Form.Item>
                                    <div>ENHANCEMENT-{index}</div>
                                    <Row gutter={24}>
                                      <Col span={8}>
                                        <Form.Item label="EN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="CN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="PTS">
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
                                );
                              })}
                              <Form.Item>
                                <Button
                                  type="dashed"
                                  onClick={() => add()}
                                  style={{ width: "60%" }}
                                >
                                  Add ENHANCEMENT
                                </Button>
                              </Form.Item>
                            </>
                          );
                        }
                      }
                    </Form.List>
                    <Form.List name="CPS">
                      {
                        (fields, { add }) => {
                          return (
                            <>
                              {fields.map((item, index) => {
                                return (
                                  <Form.Item>
                                    <div>CP-{index}</div>
                                    <Row gutter={24}>
                                      <Col span={8}>
                                        <Form.Item label="nameEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="nameCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="number">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                    <Row gutter={24}>
                                      <Col span={8}>
                                        <Form.Item label="typeEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="typeCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                
                                    <Form.Item label="descriptionCN">
                                      <Input />
                                    </Form.Item>
                                    <Form.Item label="descriptionEN">
                                      <Input />
                                    </Form.Item>

                                    <Row gutter={24}>
                                      <Col span={8}>
                                        <Form.Item label="whenEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="whenCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="targetEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="targetCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                    <Row gutter={24}>
                                      <Col span={8}>
                                        <Form.Item label="effectEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="effectCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="restrictionsEN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                      <Col span={8}>
                                        <Form.Item label="restrictionsCN">
                                          <Input />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                  </Form.Item>
                                );
                              })}
                              <Form.Item>
                                <Button
                                  type="dashed"
                                  onClick={() => add()}
                                  style={{ width: "60%" }}
                                >
                                  Add CP
                                </Button>
                              </Form.Item>
                            </>
                          );
                        }
                      }
                    </Form.List>
                  </Form.Item>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  Add ArmyRule
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    </div>
  );
};

export default Detachments;
