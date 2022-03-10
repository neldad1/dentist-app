import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <p className="tagline1">
          <h1>SMILE</h1>
          <span>is the new make up.</span>
        </p>
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
