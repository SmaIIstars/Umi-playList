import { Layout } from 'antd';

import SSHeader from './header';
import SSFooter from './footer';
import './index.scss';

const { Content } = Layout;

function BasicLayout({ children }) {
  return (
    <Layout className="basic-layout">
      <SSHeader />
      <Content>{children}</Content>
      <SSFooter />
    </Layout>
  );
}

export default BasicLayout;
