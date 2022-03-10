import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="services">
        <Link to="/procedures">Our Procedures</Link>
        {'  '}
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
