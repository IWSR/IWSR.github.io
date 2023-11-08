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
                    <Col span={8}>
                      <Form.Item
                        label="名称EN"
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

const Faction: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "ABILITIES", "Faction"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            <h3>Faction</h3>
            {fields.map(({ name, key }, index) => {
              return (
                <>
                <span onClick={() => remove(index)}>删除</span>
                <Row gutter={24} key={key}>
                  <Col span={8}>
                    <Form.Item
                      label="名称EN"
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
                增加 Faction
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

const UnitAbility: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "ABILITIES", "UnitAbility"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            <h3>UnitAbility</h3>
            {fields.map(({ name, key }, index) => {
              return (
                <>
                  <span onClick={() => remove(index)}>删除</span>
                  <Row gutter={24} key={key}>
                    <Col span={8}>
                      <Form.Item
                        label="名称EN"
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
                  </Row>
                  <PreviewMarkDown
                    name={[name, "descriptionEN"]}
                    label="descriptionEN"
                  />
                  <PreviewMarkDown
                    name={[name, "descriptionCN"]}
                    label="descriptionCN"
                  />
                </>
              );
            })}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                增加 UnitAbility
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

const WeaponsAbility: React.FC<Props> = ({ name }) => {
  return (
    <Form.List name={[name, "weaponsAbility"]}>
      {(fields, { add, remove }) => {
        return (
          <>
            <h3>装备技能</h3>
            {fields.map(({ name, key }, index) => {
              return (
                <>
                  <span onClick={() => remove(index)}>删除</span>
                  <Row gutter={24} key={key}>
                    <Col span={8}>
                      <Form.Item
                        label="名称EN"
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
                  </Row>
                  <PreviewMarkDown
                    name={[name, "descriptionEN"]}
                    label="descriptionEN"
                  />
                  <PreviewMarkDown
                    name={[name, "descriptionCN"]}
                    label="descriptionCN"
                  />
                </>
              );
            })}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: "60%" }}
              >
                增加 WeaponsAbility
              </Button>
            </Form.Item>
          </>
        );
      }}
    </Form.List>
  );
};

const Aura: React.FC<Props> = ({ name }) => {
  return (
    <Form.Item name={[name, "aura"]}>
      <h3>光环</h3>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="名称EN" name={[name, "aura", "EN"]}>
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="名称CN" name={[name, "aura", "CN"]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <PreviewMarkDown
        name={[name, "aura", "descriptionEN"]}
        label="descriptionEN"
        required={false}
      />
      <PreviewMarkDown
        name={[name, "aura", "descriptionCN"]}
        label="descriptionCN"
        required={false}
      />
    </Form.Item>
  );
};

const CanLead: React.FC<Props> = ({ name }) => {
  return (
    <Form.Item name={[name, "leader"]}>
      <h3>领袖</h3>
      <PreviewMarkDown
        name={[name, "leader", "descriptionEN"]}
        label="descriptionEN"
        required={false}
      />
      <PreviewMarkDown
        name={[name, "leader", "descriptionCN"]}
        label="descriptionCN"
        required={false}
      />
    </Form.Item>
  );
};

const ABILITIES: React.FC<Props> = ({ name }) => {
  return (
    <>
      <CORE name={name} />
      <Faction name={name} />
      <UnitAbility name={name} />
      <WeaponsAbility name={name} />
      <Aura name={name} />
      <CanLead name={name} />
    </>
  );
};

export default ABILITIES;
