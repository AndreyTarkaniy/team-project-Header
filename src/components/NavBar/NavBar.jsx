// import { Li } from 'react-router-dom';
import { Li, MenuLink, NavList } from './NavBar.styled';

export const NavBar = ({ nav }) => {
  return (
    <NavList nav={nav}>
      <Li>
        <MenuLink to="/">Home</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/drinks">Drinks</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/add">Add recipe</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/my">My recipe</MenuLink>
      </Li>
      <Li>
        <MenuLink to="/favorite">Favorite</MenuLink>
      </Li>
    </NavList>
  );
};
