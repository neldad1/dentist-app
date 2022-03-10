const HeaderLogo = () => {
  return (
    <Link to="/">
      <img className="logo" src={require('../tfLogo.png')} alt="TF" />
    </Link>
  );
};

export default HeaderLogo;
