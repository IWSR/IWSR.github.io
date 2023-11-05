import React, { useState } from "react";
import { Input, Form, Modal } from "antd";
import Markdown from 'react-markdown';
const { TextArea } = Input;

interface Props extends React.PropsWithChildren {
  label: string;
  name: (string | number)[];
}

const PreviewMarkDown: React.FC<Props> = ({ label, name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form.Item
        label={label}
        name={name}
        rules={[
          {
            required: true,
            message: "Input something!",
          },
        ]}
      >
        <div>
          <TextArea onChange={(e) => {
            setContent(e.target.value);
          }} />
          <div
            onClick={() => {
              showModal();
            }}
          >
            点击预览效果
          </div>
        </div>
      </Form.Item>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Markdown>{content}</Markdown>
      </Modal>
    </>
  );
};

export default PreviewMarkDown;
