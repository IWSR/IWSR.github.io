import React, { useContext, useEffect } from "react";
import { Input, Form, Row, Col, Select, Radio } from "antd";
import ComposeUnit from "./components/unit";
import Weapons from "./components/weapon";
import PreviewMarkDown from "../../../components/PreviewMarkDown";
import { FormContext } from "../../../../../form";

interface Props extends React.PropsWithChildren {
  name: number;
  index: number;
}

const Unit: React.FC<Props> = ({ name, index }) => {
  const form = useContext(FormContext);
  const isSM = Form.useWatch("isSM", form);
  // const isNeverRebel = Form.useWatch("isNeverRebel", form);
  
  // useEffect(() => {
  //   console.log(isSM, isNeverRebel, 'watch');
  // }, [isSM, isNeverRebel]);

  return (
    <Form.Item>
      <h2>单位-{index}</h2>

      <Row gutter={24}>
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

        {isSM ? (
          <Col span={8}>
            <Form.Item label="所属战团" initialValue="星际战士" name={[name, "legion"]} rules={[
            {
              required: true,
              message: "Input something!"
            }]}>
              <Select
                style={{ width: "100%" }}
                placeholder="Tags Mode"
                options={[
                  { value: "星际战士", label: "星际战士" },
                  { value: "黑暗天使", label: "黑暗天使" },
                  { value: "白色伤疤", label: "白色伤疤" },
                  { value: "太空野狼", label: "太空野狼" },
                  { value: "帝国之拳", label: "帝国之拳" },
                  { value: "圣血天使", label: "圣血天使" },
                  { value: "钢铁之手", label: "钢铁之手" },
                  { value: "极限战士", label: "极限战士" },
                  { value: "火蜥蜴", label: "火蜥蜴" },
                  { value: "暗鸦守卫", label: "暗鸦守卫" },
                  { value: "死亡守望", label: "死亡守望" }
                ]}
              />
            </Form.Item>
          </Col>
        ) : null}
      </Row>

      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label="是否允许被雇佣" name={[name, "isAvailableForHire"]} tooltip="IG到鸡贼，机械教到骑士这类的">
            <Radio.Group defaultValue={false}>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        {isSM ? (
          <Col span={8}>
            <Form.Item label="排斥的战团" name={[name, "rejectedLegion"]}>
              <Select
                style={{ width: "100%" }}
                placeholder="Tags Mode"
                mode="multiple"
                options={[
                  { value: "星际战士", label: "星际战士" },
                  { value: "黑暗天使", label: "黑暗天使" },
                  { value: "白色伤疤", label: "白色伤疤" },
                  { value: "太空野狼", label: "太空野狼" },
                  { value: "帝国之拳", label: "帝国之拳" },
                  { value: "圣血天使", label: "圣血天使" },
                  { value: "钢铁之手", label: "钢铁之手" },
                  { value: "极限战士", label: "极限战士" },
                  { value: "火蜥蜴", label: "火蜥蜴" },
                  { value: "暗鸦守卫", label: "暗鸦守卫" },
                  { value: "死亡守望", label: "死亡守望" }
                ]}
              />
            </Form.Item>
          </Col>
        ) : null}
      </Row>

      <Row gutter={24}>
        <Col span={24}>
          <Form.Item label="图片URL" name={[name, "imgURL"]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>

      {/* <PreviewMarkDown
        name={[name, "unitDescriptionEN"]}
        required={false}
        label="单位构成描述EN"
      /> */}
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

      {/* <PreviewMarkDown
        required={false}
        name={[name, "ABILITIES", "en"]}
        label="能力描述EN"
      /> */}

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
                console.log(data, "value");
                const regex =
                  /^[a-zA-Z0-9\u4e00-\u9fa5]+([-&][a-zA-Z0-9\u4e00-\u9fa5]+)*([-&][a-zA-Z0-9\u4e00-\u9fa5]+\([a-zA-Z0-9\u4e00-\u9fa5]+\))*$/;
                console.log(regex.test(value));
                if (value && regex.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "只允许出现英文字符、中文字符并且单词间只允许使用&分割、可使用英文()对关键词进行补充"
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
      </Form.Item>
    </Form.Item>
  );
};

export default Unit;
