import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Form from './components/form';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
      </Header>
      <Content className="site-layout" style={{
        padding: '0 50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Form />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default App;