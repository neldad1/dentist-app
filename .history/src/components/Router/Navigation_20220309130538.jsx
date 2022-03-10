import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import HeaderLogo from '../HeaderLogo';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <>
      <Menu mode="horizontal" theme="dark">
        <Menu.Item key="home">
          <span>Home</span>
          <Link to="/" />
        </Menu.Item>
        <SubMenu key="subMenu" title="Services">
          <Menu.Item key="cosmetic">
            <span>Cosmetic</span>
            <Link to="/cosmetic" />
          </Menu.Item>
          <Menu.Item key="restore">
            <span>Restorative</span>
            <Link to="/restorative" />
          </Menu.Item>
          <Menu.Item key="prevent">
            <span>Preventative</span>
            <Link to="/preventative" />
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="contact">
          <span>Contact Us</span>
          <Link to="/contact" />
        </Menu.Item>
      </Menu>
      <HeaderLogo className="logo" />
    </>
  );
};

export default Navigation;
