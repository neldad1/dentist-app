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
    <Layout className="layout">
      <BrowserRouter>
        <Header>
          <Navigation />
          <HeaderLogo />
        </Header>
        <Content className="content">
          <AppRoutes />
        </Content>
      </BrowserRouter>
      <Footer>Toof Fairy 2022 by Nelda Arvesu</Footer>
    </Layout>
  );
}

export default App;
