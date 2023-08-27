import styled from '@emotion/styled';

export const HeaderWrrap = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: rgba(67, 77, 103, 1) solid 1px;

  padding: 20px 20px;

  background-color: rgba(22, 31, 55, 1);

  @media screen and (min-width: 768px) {
    padding: 20px 32px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 100px;
  }
`;

export const Image = styled.image`
  width: 44px;
  height: 44px;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  /* padding-right: 20px; */

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const UserLogo = styled.div`
  @media screen and (min-width: 1200px) {
    padding-right: 32px;
  }
`;

export const MenuBtn = styled.div`
  /* display: block; */

  height: 24px;
  color: white;

  @media screen and (min-width: 1200px) {
    display: none;
  }
`;
