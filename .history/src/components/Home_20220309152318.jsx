import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <p className="tagline1">SMILE is the new make up.</p>
        <p className="addr">3000 * Melbourne * Victoria</p>
        <Link to="/contact">
          <Button type="primary" ghost>
            Request an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
