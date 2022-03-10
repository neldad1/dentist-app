import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './App.css';
import AppRoutes from './AppRoutes';
import { Layout } from 'antd';
import HeaderLogo from './components/Header/HeaderLogo';
import HeaderMenu from './components/Header/HeaderMenu';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          <HeaderLogo />
          <HeaderMenu />
        </Header>
        <Content>
          <AppRoutes />
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
