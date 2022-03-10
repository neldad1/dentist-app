import { Button } from 'antd';
const Home = () => {
  return (
    <div className="home">
      <span className="tagline1">SMILE is the new make up.</span>
      <span className="addr">112 DummyCity, DummyState</span>
      <Button type="primary" ghost>
        Request an Appointment
      </Button>
    </div>
  );
};

export default Home;
