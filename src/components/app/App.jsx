import { Layout } from 'components/Layout/Layout/Layout';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectorAuth } from 'redux/selectors';
import { routes } from 'routes';

export const App = () => {
  const { isAuth } = useSelector(selectorAuth);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isAuth ? (
            <Route path={routes.CONTACTS} element={<Contacts />} />
          ) : (
            <>
              <Route path={routes.REGISTER} element={<Register />} />
              <Route path={routes.LOGIN} element={<Login />} />
            </>
          )}
          <Route
            path="*"
            element={
              isAuth ? (
                <Navigate to={routes.CONTACTS} />
              ) : (
                <Navigate to={routes.LOGIN} />
              )
            }
          />
        </Route>
      </Routes>
    </>
  );
};