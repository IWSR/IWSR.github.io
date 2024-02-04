import React from "react";
import { Form, Button, Row, Col, Input } from "antd";
import PreviewMarkDown from "../../../../../components/PreviewMarkDown";

interface Props extends React.PropsWithChildren {
  name: number;
}

const CORE: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "ABILITIES", "CORE"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            <h3>CORE</h3>
            {fields.map(({ name, key }, index) => {
              return (
                <>
                  <span onClick={() => remove(index)}>删除</span>
                  <Row gutter={24} key={key}>
                    {/* <Col span={8}>
                      <Form.Item
                        label="名称EN"
                        name={[name, "EN"]}
                      >
                        <Input />
                      </Form.Item>
                    </Col> */}
                    <Col span={8}>
                      <Form.Item
                        label="名称CN"
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
                增加 CORE
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

const ABILITIES: React.FC<Props> = ({ name }) => {
  return (
    <>
      <CORE name={name} />
    </>
  );
};

export default ABILITIES;
