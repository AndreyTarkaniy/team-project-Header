import img from '../../img/img.jpg';
import { UserLink, UserImg, UserText } from './UserLogo.styled';

const UserLogo = () => {
  return (
    <>
      <UserLink to="/modal">
        <UserImg src={img} alt="logo" />
        <UserText>User name</UserText>
      </UserLink>
    </>
  );
};

export default UserLogo;
// width={44} height={44}
