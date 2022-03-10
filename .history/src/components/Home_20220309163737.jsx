import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="tagline1">
          <span>SMILE</span>
          <span>is the new make up.</span>
        </div>
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
