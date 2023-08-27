import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;

  text-decoration: none;

  /* @media screen and (min-width: 1200px) {
    padding-right: 100px;
  } */
`;

export const UserImg = styled.img`
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

export const UserText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: rgba(243, 243, 243, 1);
  text-decoration: none;
`;
