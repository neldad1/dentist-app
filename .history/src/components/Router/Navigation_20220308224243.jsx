import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu className="navigation" mode="horizontal" theme="light">
      <Menu.Item key="home">
        <span>Home</span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="services">
        <span>Services</span>
        <Link to="/procedures" />
      </Menu.Item>
      <Menu.Item key="contact">
        <span>Contact Us</span>
        <Link to="/contact" />
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
