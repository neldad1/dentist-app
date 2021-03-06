import { Divider } from 'antd';
import ToofImg from '../ToofImg';

const Cosmetic = () => {
  return (
    <div>
      <div>
        <h1>Cosmetic Dentistry</h1>
        <p>
          At Toof Fairy, our doctors always aim for that head-turning smile.
        </p>
      </div>
      <Divider />
      <div className="service-info">
        <ToofImg />
        <div>
          <h2>Teeth Whitening</h2>
          <span>Dazzle yourself with a bright smile.</span>
        </div>
      </div>
      <div>
        <ToofImg />
        <div>
          <h2>InvisalignÂ®</h2>
          <span>
            InvisalignÂ® treatment is a series of clear plastic removable
            orthodontic aligners that gently move patients' teeth.{' '}
          </span>
        </div>
      </div>
      <div>
        <ToofImg />
        <div>
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
