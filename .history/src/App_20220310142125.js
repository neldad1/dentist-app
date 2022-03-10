import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './App.css';
import AppRoutes from './AppRoutes';
import { Layout } from 'antd';
import HeaderLogo from './components/Header/HeaderLogo';
import Navigation from './components/Header/Navigation';
import FooterMenu from './components/Footer/FooterMenu';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header className="header">
          <HeaderLogo />
          <Navigation />
        </Header>
        <Content>
          <AppRoutes />
        </Content>
        <Footer className="footer">
          <span>© 2022 Toof Fairy • All rights reserved </span>
          <FooterMenu />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
