import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import PreviewMarkDown from "../../../../../components/PreviewMarkDown";

interface Props extends React.PropsWithChildren {
  name: number;
}

const Unit: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "units"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            {fields.map(({ name, key }, index) => {
              return (
                <Form.Item key={key}>
                  <h3>构成该单位的模型——模型{index}</h3>
                  <span onClick={() => remove(index)}>删除</span>
                  <Row gutter={24}>
                    <Col span={8}>
                      <Form.Item
                        label="模型名称EN"
                        name={[name, "EN"]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={8}>
                      <Form.Item
                        label="模型名称CN"
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
                        label="该单位中包含的模型数量"
                        name={[name, "number"]}
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
                        label="远程特"
                        name={[name, "INVULNERABLE SAVE", "Against ranged attacks"]}
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
                        label="近战特"
                        name={[name, "INVULNERABLE SAVE", "Against meleed attacks"]}
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
                        label="M"
                        name={[name, "characteristic", "M"]}
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
                        label="T"
                        name={[name, "characteristic", "T"]}
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
                        label="SV"
                        name={[name, "characteristic", "SV"]}
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
                        label="W"
                        name={[name, "characteristic", "W"]}
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
                        label="LD"
                        name={[name, "characteristic", "LD"]}
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
                        label="OC"
                        name={[name, "characteristic", "OC"]}
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

                  <Form.List name={[name, "armory"]}>
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
                                      label="武器名称EN"
                                      name={[name, "EN"]}
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
                                  <Col span={8}>
                                    <Form.Item
                                      label="数量"
                                      name={[name, "number"]}
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
                              </>
                            );
                          })}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              style={{ width: "60%" }}
                            >
                              增加武器选项
                            </Button>
                          </Form.Item>
                        </>
                      );
                    }}
                  </Form.List>

                  <PreviewMarkDown
                    label="装备描述/替换 CN"
                    name={[name, "armoryDescCN"]}
                    required={false}
                  />

                  <PreviewMarkDown
                    label="装备描述/替换 EN"
                    required={false}
                    name={[name, "armoryDescEN"]}
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
                增加构成单位
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

export default Unit;
