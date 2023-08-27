import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  /* padding-left: 20px; */
  text-decoration: none;

  @media screen and (min-width: 768px) {
    /* padding-left: 32px; */
  }
  /* @media screen and (min-width: 1200px) {
    padding-left: 100px;
  } */
`;

export const LogoImg = styled.img`
  color: rgba(243, 243, 243, 1);
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: calc(18 / 16);
  color: rgba(243, 243, 243, 1);
`;
