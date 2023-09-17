import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='register' element={<RegisterPage />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Route>
    </Routes>
  );
}
