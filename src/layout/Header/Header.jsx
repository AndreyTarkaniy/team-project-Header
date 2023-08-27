import Logo from 'components/Logo/Logo';
import UserLogo from 'components/UserLogo/UserLogo';
import { HeaderWrrap, MenuBtn, UserBox } from './Header.styled';
import { NavBar } from 'components/NavBar/NavBar';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <HeaderWrrap>
      <Logo />

      <NavBar nav={nav} />
      <UserBox>
        <UserLogo />
        <MenuBtn
          onClick={() => {
            setNav(!nav);
          }}
        >
          {nav ? <AiOutlineClose size={28} /> : <FiAlignJustify size={28} />}
        </MenuBtn>
      </UserBox>
    </HeaderWrrap>
  );
};
