import React from "react";
import { Input, Form, Row, Col } from "antd";
import ComposeUnit from "./components/unit";
import Weapons from "./components/weapon";
import ABILITIES from "./components/abilities";
import PreviewMarkDown from "../../../components/PreviewMarkDown";

interface Props extends React.PropsWithChildren {
  name: number;
  index: number;
}

const Unit: React.FC<Props> = ({ name, index }) => {
  return (
    <Form.Item>
      <h2>单位-{index}</h2>

      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="单位名称EN"
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
            label="单位名称CN"
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

      <Form.Item
        label="背景描述CN"
        name={[name, "describeCN"]}
        rules={[
          {
            required: true,
            message: "Input something!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="背景描述EN"
        name={[name, "describeEN"]}
        rules={[
          {
            required: true,
            message: "Input something!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <h3>构成该单位的模型</h3>

      <ComposeUnit name={name} />

      <h3>武器面板</h3>

      <Weapons name={name} />

      <h3>能力</h3>
      <ABILITIES name={name} />

      <Form.Item name={[name, "TRANSPORT"]}>
        <h3>运输工具</h3>
        <PreviewMarkDown name={[name, "TRANSPORT", "EN"]} required={false} label="运输工具EN" />
        <PreviewMarkDown name={[name, "TRANSPORT", "EN"]} required={false} label="运输工具CN" />
      </Form.Item>

      <Form.Item name={[name, "INVULNERABLE SAVE"]}>
        <h3>特保</h3>
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
      </Form.Item>

      <Form.Item name={[name, "KEYWORDS"]}>
        <h3>关键词</h3>
        <Form.Item
          label="CN"
          name={[name, "KEYWORDS", "CN"]}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="EN"
          name={[name, "KEYWORDS", "EN"]}
          rules={[
            {
              required: true,
              message: "Input something!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form.Item>
    </Form.Item>
  );
};

export default Unit;
