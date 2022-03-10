import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import MenuItem from '../MenuItem';
const { SubMenu } = Menu;

const Navigation = () => {
  return (
    <Menu mode="horizontal" className="menu">
      <MenuItem name="home" />
      <SubMenu key="subMenu" title="Services">
        <MenuItem name="cosmetic" />
        <MenuItem name="restorative" />
        <MenuItem name="preventative" />
      </SubMenu>
      <MenuItem name="contact" link="/contac" />
    </Menu>
  );
};

export default Navigation;
