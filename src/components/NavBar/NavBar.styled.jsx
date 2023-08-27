import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
  position: fixed;

  display: none;

  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  left: 20px;
  right: 20px;
  top: 85px;
  /* bottom: 0; */
  width: 100;
  height: 100;
  z-index: 10;

  transition: bottom 1s;

  list-style: none;
  padding-left: 0;
  margin: 0;

  background-color: rgba(22, 31, 55, 1);

  bottom: ${props => {
    return props.nav ? '0' : '100%';
  }};
  display: ${props => {
    return props.nav ? 'flex' : 'none';
  }};

  @media screen and (min-width: 1200px) {
    position: static;

    display: flex;
    flex-direction: row;

    gap: 16px;
  }
`;

export const Li = styled.li``;

export const MenuLink = styled(Link)`
  color: white;
  padding: 8px 16px;
  border: rgba(67, 77, 103, 1) solid 1px;
  border-radius: 40px;
  text-decoration: none;

  :hover,
  :focus {
    background-color: rgba(67, 77, 103, 1);
  }
`;
