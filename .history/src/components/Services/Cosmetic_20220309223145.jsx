import { Divider } from 'antd';
import ToofImg from './ToofImg';

const Cosmetic = () => {
  return (
    <div className="services">
      <div>
        <h1>Cosmetic Dentistry</h1>
        <p>
          At Toof Fairy, our doctors always aim for that head-turning smile.
        </p>
      </div>
      <Divider />
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>Teeth Whitening</h2>
          <span>
            Tooth whitening or tooth bleaching is the process of lightening the
            color of human teeth.
          </span>
        </div>
      </div>
      <div className="service-info">
        <ToofImg />
        <div className="service-definition">
          <h2>InvisalignÂ®</h2>
          <span>
            InvisalignÂ® treatment is a series of clear plastic removable
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

export default Cosmetic;
