import { Layout } from 'components/Layout/Layout/Layout';
import { tokenId } from 'http';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/Auth/operation.auth';
import { selectorAuth } from 'redux/selectors';
import { routes } from 'routes';

export const App = () => {
  const { token, user } = useSelector(selectorAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !user.email) {
      tokenId.set(token);
      dispatch(getCurrentUser());
    }
  }, [token, user.email, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {token ? (
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
              token ? (
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
