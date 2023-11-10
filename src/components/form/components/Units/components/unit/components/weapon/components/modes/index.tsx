import React, { useState } from "react";
import { Form, Button, Row, Col, Input, Radio } from "antd";
import type { RadioChangeEvent } from "antd";

interface Props extends React.PropsWithChildren {
  name: number;
}

const Mode: React.FC<Props> = ({ name }) => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={1}>无模式</Radio>
        <Radio value={2}>多模式</Radio>
      </Radio.Group>
      {value === 1 ? (
        // 无模式
        <>
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
                        <div onClick={() => remove(index)}>删除</div>
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
                            <Form.Item label="value" name={[name, "value"]}>
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
        </>
      ) : (
        <Form.List name={[name, "modes"]}>
          {(fields, { add, remove }) => {
            return (
              <>
                {fields.map(({ name, key }, index) => {
                  return (
                    <div key={key}>
                      <div onClick={() => remove(index)}>删除</div>
                      <Row gutter={24}>
                      <Col span={4}>
                          <Form.Item
                            label="模式名称"
                            name={[name, "modeName"]}
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
                                    <div onClick={() => remove(index)}>
                                      删除
                                    </div>
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
                    </div>
                  );
                })}
                <Form.Item>
                    <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: "60%" }}
                    >
                        增加武器模式
                    </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      )}
    </>
  );
};

export default Mode;
