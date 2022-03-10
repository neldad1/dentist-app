import { Button } from 'antd';
const Home = () => {
  return (
    <div className="home">
      <div className="tagline-wrapper">
        <span className="tagline1">SMILE is the new make up.</span>
        <span className="addr">112 DummyCity, DummyState</span>
      </div>
      <Button type="primary" ghost>
        Request an Appointment
      </Button>
    </div>
  );
};

export default Home;
