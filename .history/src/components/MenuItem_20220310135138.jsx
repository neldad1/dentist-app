import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MenuItem = ({ name }) => {
  const link = name === 'home' ? '/' : `/${name}`;
  return (
    <Menu.Item key="name">
      <span>{name}</span>
      <Link to={link} />
    </Menu.Item>
  );
};

export default MenuItem;
