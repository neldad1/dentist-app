import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './App.css';
import Navigation from './components/Header/Navigation';
import AppRoutes from './AppRoutes';
import { Layout } from 'antd';
import HeaderLogo from './components/Header/HeaderLogo';
import Rights from './components/Footer/Rights';
import Terms from './components/Footer/Terms';
import Privacy from './components/Footer/Privacy';
import Contact from './components/Contact';
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
          <Rights />
          <Terms />
          <Privacy />
          <Contact />
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
