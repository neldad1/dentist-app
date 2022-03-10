import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const FooterMenu = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="terms">
        <span>Terms</span>
        <Link to="/terms" />
      </Menu.Item>
      <Menu.Item key="privacy">
        <span>Privacy</span>
        <Link to="/terms" />
      </Menu.Item>
      <Menu.Item key="contact">
        <span>Contact Us</span>
        <Link to="/contact" />
      </Menu.Item>
    </Menu>
  );
};

export default FooterMenu;
