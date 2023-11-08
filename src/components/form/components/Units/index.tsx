import React from "react";
import { Tabs, Form, Button, Collapse } from "antd";
import type { TabsProps } from "antd";
import Unit from "./components/unit";

const getItems = (name: string): TabsProps["items"] => [
  {
    key: "1",
    label: "BATTLELINE",
    children: (
      <Form.List name={[name, "BATTLELINE"]}>
        {(fields, { add, remove }) => {
          return (
            <>
              <Collapse>
                {fields.map(({ name, key }, index) => {
                  return (
                    <Collapse.Panel header={`unit ${index}`} key={index}>
                      <span onClick={() => remove(index)}>删除</span>
                      <Unit key={key} name={name} index={index} />;
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
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
        {(fields, { add, remove }) => {
          return (
            <>
              <Collapse>
                {fields.map(({ name, key }, index) => {
                  return (
                    <Collapse.Panel header={`unit ${index}`} key={index}>
                      <span onClick={() => remove(index)}>删除</span>
                      <Unit key={key} name={name} index={index} />;
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
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
    key: "3",
    label: "DEDICATED TRANSPORT",
    children: (
      <Form.List name={[name, "DEDICATED TRANSPORT"]}>
        {(fields, { add, remove }) => {
          return (
            <>
              <Collapse>
                {fields.map(({ name, key }, index) => {
                  return (
                    <Collapse.Panel header={`unit ${index}`} key={index}>
                      <span onClick={() => remove(index)}>删除</span>
                      <Unit key={key} name={name} index={index} />;
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
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
    key: "4",
    label: "OTHER DATASHEETS",
    children: (
      <Form.List name={[name, "OTHER DATASHEETS"]}>
        {(fields, { add, remove }) => {
          return (
            <>
              <Collapse>
                {fields.map(({ name, key }, index) => {
                  return (
                    <Collapse.Panel header={`unit ${index}`} key={index}>
                      <span onClick={() => remove(index)}>删除</span>
                      <Unit key={key} name={name} index={index} />;
                    </Collapse.Panel>
                  );
                })}
              </Collapse>
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
      <Tabs defaultActiveKey="1" items={getItems("units")} />
    </Form.Item>
  );
};

export default Units;
