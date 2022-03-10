import { Link } from 'react-router-dom';

const FooterMenu = () => {
  return (
    <div className="footer-menu">
      <Link to="/terms" /> Terms <Link to="/privacy"> Privacy </Link>
      <Link to="/contact"> Contact Us </Link>
    </div>
  );
};

export default FooterMenu;
