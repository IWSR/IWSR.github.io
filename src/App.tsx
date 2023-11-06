import React from 'react';
import './index.css';
import { Layout } from 'antd';
import Form from './components/form';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Content className="site-layout" style={{
        padding: '50px 50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        minHeight: '100vh'
      }}>
        <Form />
      </Content>
    </Layout>
  );
};

export default App;