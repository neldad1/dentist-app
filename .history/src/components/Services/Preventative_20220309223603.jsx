import { Divider } from 'antd';
import ToofImg from './ToofImg';

const Preventative = () => {
  return (
    <div className="services">
      <div>
        <h1>Preventative Dentistry</h1>
        <p>
          Our goal is to keep you and your mouth as healthy and clean as
          possible so you can maintain your natural teeth for life.
        </p>
      </div>
      <Divider />
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Oral Hygiene</h2>
          <span>
            Oral hygiene is the practice of keeping one's mouth clean and free
            of disease and other problems by regular brushing of the teeth and
            cleaning between the teeth.{' '}
          </span>
        </div>
      </div>
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Mouthguards</h2>
          <span>
            A mouthguard is a protective device for the mouth that covers the
            teeth and gums to prevent and reduce injury to the teeth, arches,
            lips and gums.{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preventative;
