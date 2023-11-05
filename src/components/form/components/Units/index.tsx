import React from "react";
import { Tabs, Form, Button } from "antd";
import type { TabsProps } from "antd";
import Unit from "./components/unit";

const getItems = (name: string): TabsProps["items"] => [
  {
    key: "1",
    label: "BATTLELINE",
    children: (
      <Form.List name={[name, "BATTLELINE"]}>
        {(fields, { add }) => {
          return (
            <>
              {fields.map(({ name, key }, index) => {
                return <Unit key={key} name={name} index={index} />;
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  增加单位
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
    label: "CHARACTER",
    children: (
      <Form.List name={[name, "CHARACTER"]}>
        {(fields, { add }) => {
          return (
            <>
              {fields.map(({ name, key }, index) => {
                return <>123</>;
              })}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  style={{ width: "60%" }}
                >
                  增加单位
                </Button>
              </Form.Item>
            </>
          );
        }}
      </Form.List>
    ),
  },
];

const Units: React.FC = () => {
  return (
    <Form.Item name="units">
      <h3>Units</h3>
      <Tabs
        defaultActiveKey="1"
        items={getItems('units')}
      />
    </Form.Item>
  );
};

export default Units;
