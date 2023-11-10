import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import Mode from "./components/modes";

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
                  <Mode name={name}/>
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
