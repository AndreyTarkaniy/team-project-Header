import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';

import { Header } from '../Header/Header';
import { Footer } from 'layout/Footer';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;

/* <Suspense fallback={<div>Loading...</div>}>
<Outlet />
</Suspense> */
