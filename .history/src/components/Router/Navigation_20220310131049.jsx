import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu mode="horizontal" className="navigation">
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
  );
};

export default Navigation;
