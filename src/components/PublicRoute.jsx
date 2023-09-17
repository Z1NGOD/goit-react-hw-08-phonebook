import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ redirectTo = '/' }) {
  const { token } = useSelector(state => state.auth);
  const isAuthenticated = token;
  return isAuthenticated ? (
    <Navigate to={redirectTo} />
  ) : (
    <Suspense fallback={<div>loading...</div>}>
      <Outlet />
    </Suspense>
  );
}

export default PublicRoute;
