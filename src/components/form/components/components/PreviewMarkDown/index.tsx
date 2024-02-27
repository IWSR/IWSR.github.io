import React, { useState } from "react";
import { Input, Form, Modal } from "antd";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import { FormContext } from "../../../index";
const { TextArea } = Input;

interface Props extends React.PropsWithChildren {
  label: string;
  name: (string | number)[] | string;
  required?: boolean;
}

const PreviewMarkDown: React.FC<Props> = ({ label, name, required = true }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleValueChange = (value) => {
    console.log(value, 'value');
    // md.current = value;
    setContent(value);
    return {};
  };

  return (
    <>
      <Form.Item
        label={label}
        name={name}
        getValueProps={handleValueChange}
        rules={
          required
            ? [
                {
                  required: true,
                  message: "Input something!",
                },
              ]
            : []
        }
      >
        <TextArea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </Form.Item>
      <div
        style={{
          "color": "red"
        }}
        onClick={() => {
          showModal();
        }}
      >
        点击预览效果
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </Modal>
    </>
  );
};

export default PreviewMarkDown;
