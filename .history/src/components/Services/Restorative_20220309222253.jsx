import { Divider } from 'antd';
import ToofImg from './ToofImg';

const Restorative = () => {
  return (
    <div>
      <div>
        <h1>Restorative Dentistry</h1>
        <p>
          Restorative dentistry in Toof Fairy can replace and repair teeth,
          restore your ideal bite, and strengthen the integrity of your smile.
        </p>
      </div>
      <Divider />
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Crowns</h2>
          <span>
            Every tooth is different, so every crown needs to incorporate just
            the right structure in order to blend in with your surrounding teeth
            and perform well.
          </span>
        </div>
      </div>
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Bridges</h2>
          <span>A dental bridge is one of many options to replace teeth.</span>
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

export default Restorative;
