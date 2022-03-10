import { Menu } from 'antd';
import MenuItem from '../MenuItem';
const FooterMenu = () => {
  return (
    <Menu>
      <MenuItem name="terms" />
      <MenuItem name="privacy" />
      <MenuItem name="contact" />
    </Menu>
  );
};

export default FooterMenu;
