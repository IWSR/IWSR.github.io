import React from "react";
import { Row, Col, Form, Input, Tabs, Button, Select, Collapse } from "antd";
import type { TabsProps } from "antd";
import PreviewMarkDown from "../components/PreviewMarkDown";

const getItems = (name: number): TabsProps["items"] => [
  {
    key: "1",
    label: "CP",
    children: (
      <Form.List name={[name, "CPS"]}>
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map(({ name, key }, index) => {
                return (
                  <Form.Item key={key}>
                    <h2>
                      CP-{index} <span onClick={() => remove(index)}>删除</span>
                    </h2>
                    <Row gutter={24}>
                      {/* <Col span={8}>
                        <Form.Item
                          label="nameEN"
                          name={[name, "nameEN"]}
                          rules={[
                            {
                              message: "Input something!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col> */}
                      <Col span={8}>
                        <Form.Item
                          label="nameCN"
                          name={[name, "nameCN"]}
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
                          label="CP消耗数量"
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
                      {/* <Col span={8}>
                        <Form.Item
                          label="CP种类EN"
                          name={[name, "typeEN"]}
                          rules={[
                            {
                              message: "Input something!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col> */}
                      <Col span={8}>
                        <Form.Item
                          label="CP种类CN"
                          name={[name, "typeCN"]}
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
                      name={[name, "contentCN"]}
                      label="contentCN"
                    />

                    {/* <PreviewMarkDown required={false} name={[name, "contentEN"]} label="contentEN" /> */}
                  </Form.Item>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  增加 CP
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    ),
  },
  {
    key: "2",
    label: "强化",
    children: (
      <Form.List name={[name, "ENHANCEMENTS"]}>
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map(({ name, key }, index) => {
                return (
                  <Form.Item key={key}>
                    <h2>
                      强化-{index}{" "}
                      <span onClick={() => remove(index)}>删除</span>
                    </h2>
                    <Row gutter={24}>
                      {/* <Col span={8}>
                        <Form.Item
                          label="EN"
                          name={[name, "EN"]}
                          rules={[
                            {
                              message: "Input something!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col> */}
                      <Col span={8}>
                        <Form.Item
                          label="CN"
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
                          label="分数"
                          name={[name, "PTS"]}
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

                    {/* <PreviewMarkDown required={false} name={[name, "descriptionEN"]} label="descriptionEN" /> */}
                  </Form.Item>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  增加强化
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    ),
  },
];

const Detachments: React.FC = () => {
  return (
    <div>
      <h3>分队规则</h3>
      <Form.List name="Detachments">
        {(fields, { add, remove }) => {
          return (
            <Collapse>
              {fields.map(({ key, name }, index) => {
                return (
                  <Collapse.Panel header={`分队 ${index}`} key={index}>
                    <Form.Item key={key}>
                      <h2>
                        分队-{index}{" "}
                        <span onClick={() => remove(index)}>删除</span>
                      </h2>
                      <Row gutter={24}>
                        <Col span={8}>
                          <Form.Item
                            label="分队名称Cn"
                            name={[name, "nameCn"]}
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
                            label="允许增加的援军"
                            name={[name, "reinforcements"]}
                          >
                            <Select
                              mode="tags"
                              style={{ width: "100%" }}
                              placeholder="没有援军就空着"
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        {/* <Col span={8}>
                        <Form.Item
                          label="分队能力名称EN"
                          name={[name, "abilityNameEN"]}
                          rules={[
                            {
                              message: "Input something!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col> */}
                        <Col span={8}>
                          <Form.Item
                            label="分队能力名称CN"
                            name={[name, "abilityNameCN"]}
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
                        name={[name, "abilityDescriptionCN"]}
                        label="能力描述CN"
                      />

                      {/* <PreviewMarkDown required={false} name={[name, "abilityDescriptionEN"]} label="能力描述EN" /> */}

                      <Tabs
                        defaultActiveKey="1"
                        items={getItems(name)}
                        style={{
                          marginLeft: "50px",
                        }}
                      />
                    </Form.Item>
                  </Collapse.Panel>
                );
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  增加分队
                </Button>
              </Form.Item>
            </Collapse>
          );
        }}
      </Form.List>
    </div>
  );
};

export default Detachments;
