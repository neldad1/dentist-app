import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="tagline-wrapper">
        <p className="tagline1">SMILE is the new make up.</p>
        <p className="addr">112 * DummyCity * DummyState</p>
      </div>
      <Link to="/contact">
        <Button type="primary" ghost>
          Request an Appointment
        </Button>
      </Link>
    </div>
  );
};

export default Home;
