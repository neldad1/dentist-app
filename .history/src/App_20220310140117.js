import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './App.css';
import AppRoutes from './AppRoutes';
import { Layout } from 'antd';
import HeaderLogo from './components/Header/HeaderLogo';
import Navigation from './components/Header/Navigation';
import { Link } from 'react-router-dom';
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
          <Link to="/rights" />
          <Link to="/terms" />
          <Link to="/privacy" />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
