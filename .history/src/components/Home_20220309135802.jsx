import { Button } from 'antd';
const Home = () => {
  return (
    <div className="home">
      <div className="tagline-wrapper">
        <p className="tagline1">SMILE is the new make up.</p>
        <p className="addr">112 DummyCity, DummyState</p>
      </div>
      <Button type="primary" ghost>
        Request an Appointment
      </Button>
    </div>
  );
};

export default Home;
