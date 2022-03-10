import { Image } from 'antd';

const ToofImg = () => {
  return (
    <div>
      <Image
        width={70}
        preview={false}
        src={require('../../toof.png')}
        alt="toof"
      />
    </div>
  );
};

export default ToofImg;
