import { Divider } from 'antd';
import ToofImg from '../ToofImg';

const Preventative = () => {
  return (
    <div>
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
          <h2>ORAL HYGIENE</h2>
          <span>
            Oral hygiene is the practice of keeping one's mouth clean and free
            of disease and other problems by regular brushing of the teeth and
            cleaning between the teeth.
          </span>
        </div>
      </div>
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>MOUTHGUARDS</h2>
          <span>
            Invisalign® treatment is a series of clear plastic removable
            orthodontic aligners that gently move patients' teeth.{' '}
          </span>
        </div>
      </div>
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Gum Contouring</h2>
          <span>
            Gum contouring is a dental procedure which is conducted in order to
            improve the health and appearance of a smile.{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preventative;
