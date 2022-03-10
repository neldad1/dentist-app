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
      <div>
        <ToofImg />
        <h2>Teeth Whitening</h2>
        <span>Dazzle yourself with a bright smile.</span>
      </div>
    </div>
  );
};

export default Cosmetic;
