import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Header />
      <Outlet />
    </Suspense>
  );
}

export default Layout;
