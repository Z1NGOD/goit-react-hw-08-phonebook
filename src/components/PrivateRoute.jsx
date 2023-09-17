import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

function PrivateRoute({ redirectTo }) {
  const { token } = useSelector(state => state.auth);

  return token ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default PrivateRoute;
