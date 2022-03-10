import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const FooterMenu = () => {
  return (
    <Menu mode="horizontal" className="menu">
      <Menu.Item key="terms">
        <span>Terms</span>
        <Link to="/terms" />
      </Menu.Item>
      <Menu.Item key="privacy">
        <span>Privacy</span>
        <Link to="/privacy" />
      </Menu.Item>
      <Menu.Item key="contact">
        <span>Contact Us</span>
        <Link to="/contact" />
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
