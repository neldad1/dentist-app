import { Link } from 'react-router-dom';
import {  Menu  } from 'antd';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item key="home"><
      <Link to="/">Home</Link>
      </Menu.Item>
      {'  '}
      <Link to="/procedures">Our Procedures</Link>
      {'  '}
      <Link to="/contact">Contact Us</Link>
    </Menu>
  );
};

export default Navigation;
