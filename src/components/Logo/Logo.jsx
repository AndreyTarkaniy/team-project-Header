import logo from './logo.png';
import { LogoLink, LogoImg, LogoText } from './Logo.styled';

const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoImg src={logo} alt="logo" width={22} height={22} />
        <LogoText>Drink Master</LogoText>
      </LogoLink>
    </>
  );
};

export default Logo;
