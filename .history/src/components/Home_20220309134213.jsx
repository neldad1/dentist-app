import { Button } from 'antd';
const Home = () => {
  return (
    <div className="home">
      <h1>Dentist Website</h1>
      <p>Welcome to my dentist website.</p>
      <Button type="primary" ghost>
        Request an Appointment
      </Button>
    </div>
  );
};

export default Home;
