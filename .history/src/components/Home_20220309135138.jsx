import { Button } from 'antd';
const Home = () => {
  return (
    <div className="home">
      <div className="tagline-wrapper">
        <span className="tagline1">SMILE</span>
        <span className="tagline2">is the new make up</span>
      </div>
      <Button type="primary" ghost>
        Request an Appointment
      </Button>
    </div>
  );
};

export default Home;
