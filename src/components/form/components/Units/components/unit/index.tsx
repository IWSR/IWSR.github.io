import React from "react";
import { Input, Form, Row, Col } from "antd";
import ComposeUnit from "./components/unit";
import Weapons from "./components/weapon";
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

      <Row gutter={24}>
        <Col span={24}>
          <Form.Item label="图片URL" name={[name, "imgURL"]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <PreviewMarkDown
        name={[name, "unitDescriptionEN"]}
        required={false}
        label="单位构成描述EN"
      />
      <PreviewMarkDown
        name={[name, "unitDescriptionCN"]}
        label="单位构成描述CN"
      />

      <h3>构成该单位的模型</h3>

      <ComposeUnit name={name} />

      <h3>武器面板</h3>

      <Weapons name={name} />

      <h3>能力</h3>
      <PreviewMarkDown
        name={[name, "ABILITIES", "cn"]}
        required={true}
        label="能力描述CN"
      />

      <PreviewMarkDown
        required={false}
        name={[name, "ABILITIES", "en"]}
        label="能力描述EN"
      />

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
            () => ({
              validator(_, data) {
                const value = data.join("&");
                const regex =
                  /^[a-zA-Z0-9\u4e00-\u9fa5]+([-&][a-zA-Z0-9\u4e00-\u9fa5]+)*$/;
                if (value && regex.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "只允许出现英文字符、中文字符并且单词间只允许使用&分割"
                  )
                );
              },
            }),
          ]}
          valuePropName="value"
          getValueFromEvent={(e) => {
            return e.target.value.split("&");
          }}
          getValueProps={(val) => {
            return { value: val ? val.join("&") : "" };
          }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="EN"
          name={[name, "KEYWORDS", "EN"]}
          rules={[
            {
              required: false,
              message: "Input something!",
            },
            () => ({
              validator(_, data) {
                const value = data.join("&");
                console.log(value, 'value');
                if (value) {
                  const regex =
                    /^[a-zA-Z0-9\u4e00-\u9fa5]+([-&][a-zA-Z0-9\u4e00-\u9fa5]+)*$/;
                  if (value && regex.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "只允许出现英文字符、中文字符并且单词间只允许使用&分割"
                    )
                  );
                } else {
                  Promise.resolve();
                }
              },
            }),
          ]}
          valuePropName="value"
          getValueFromEvent={(e) => {
            return e.target.value.split("&");
          }}
          getValueProps={(val) => {
            return { value: val ? val.join("&") : "" };
          }}
        >
          <Input />
        </Form.Item>
      </Form.Item>
    </Form.Item>
  );
};

export default Unit;
