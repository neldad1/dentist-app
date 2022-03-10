import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <div className="tagline1">
          <p className="tagline1">SMILE is the.</p>
          <p className="tagline1">new make up.</p>
        </div>
        <p className="addr">3000 • Melbourne • Victoria</p>
        <Link to="/contact">
          <Button type="default" shape="round" ghost>
            Request an Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
