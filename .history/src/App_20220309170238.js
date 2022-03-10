import { BrowserRouter } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.min.css';
import Navigation from './components/Router/Navigation';
import AppRoutes from './components/Router/AppRoutes';
import { Layout } from 'antd';
import HeaderLogo from './components/HeaderLogo';
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout className="layout" theme="light">
      <BrowserRouter>
        <Header theme="light">
          <HeaderLogo />
          <Navigation />
        </Header>
        <Content className="content">
          <AppRoutes />
        </Content>
      </BrowserRouter>
      <Footer className="footer">
        © 2022 Toof Fairy • All rights reserved • Terms • Privacy • Contact Us
      </Footer>
    </Layout>
  );
}

export default App;
