import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
// import PreviewMarkDown from "../../../../../components/PreviewMarkDown";

interface Props extends React.PropsWithChildren {
  name: number;
}

const Weapons: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "weapons"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map(({ name, key }, index) => {
              return (
                <Form.Item key={key}>
                  <h3>武器面板——武器{index}</h3>
                  <span onClick={() => remove(index)}>删除</span>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Form.Item
                        label="武器名称EN"
                        name={[name, "EN"]}
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
                        label="武器名称CN"
                        name={[name, "CN"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="range"
                        name={[name, "range"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="attack"
                        name={[name, "attack"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="W/BS"
                        name={[name, "BS"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="S"
                        name={[name, "S"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="AP"
                        name={[name, "AP"]}
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
                    <Col span={4}>
                      <Form.Item
                        label="D"
                        name={[name, "D"]}
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
                  <Form.List name={[name, "ability"]}>
                    {(fields, { add, remove }) => {
                      return (
                        <>
                          {fields.map(({ name, key }, index) => {
                            return (
                              <>
                                <span onClick={() => remove(index)}>删除</span>
                                <Row gutter={24} key={key}>
                                  <Col span={8}>
                                    <Form.Item
                                      label="武器能力名称CN"
                                      name={[name, "CN"]}
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
                                      label="武器能力名称EN"
                                      name={[name, "EN"]}
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
                                      label="value"
                                      name={[name, "value"]}
                                    >
                                      <Input />
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </>
                            );
                          })}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              style={{ width: "60%" }}
                            >
                              增加武器能力
                            </Button>
                          </Form.Item>
                        </>
                      );
                    }}
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
                增加武器数据面板
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default Weapons;
