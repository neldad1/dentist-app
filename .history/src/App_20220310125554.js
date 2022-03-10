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
    <BrowserRouter>
      <Layout className="layout">
        <Header className="navigation">
          <HeaderLogo />
          <Navigation />
        </Header>
        <Content>
          <AppRoutes />
        </Content>
        <Footer className="footer">
          © 2022 Toof Fairy • All rights reserved • Terms • Privacy • Contact Us
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
