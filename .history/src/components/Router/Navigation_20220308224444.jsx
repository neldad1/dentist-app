import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home">
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <SubMenu key="subMenu">
        <span>Services</span>
        <Link to="/services" />
      </SubMenu>
      <Menu.Item key="contact">
        <span>Contact Us</span>
        <Link to="/contact" />
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
