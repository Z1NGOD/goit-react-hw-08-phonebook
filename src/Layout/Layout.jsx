import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'ui/Container.styled';

function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
