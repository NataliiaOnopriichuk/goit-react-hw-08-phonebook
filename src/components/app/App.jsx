import { Layout } from 'components/Layout/Layout/Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCurrentUser } from 'redux/Auth/operation.auth';
import { selectorAuth } from 'redux/selectors';
import { routes } from 'utils/routes';

const Home = lazy(() =>
  import('../../pages/Home').then(module => ({ default: module.Home }))
);

const Contacts = lazy(() =>
  import('../../pages/Contacts').then(module => ({ default: module.Contacts }))
);

const Register = lazy(() =>
  import('../../pages/Register').then(module => ({ default: module.Register }))
);

const Login = lazy(() =>
  import('../../pages/Login').then(module => ({ default: module.Login }))
);

export const App = () => {
  const { token } = useSelector(selectorAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          {token ? (
            <Route path={routes.CONTACTS} element={<Contacts />} />
          ) : (
            <>
              <Route path={routes.REGISTER} element={<Register />} />
              <Route path={routes.LOGIN} element={<Login />} />
            </>
          )}
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </>
  );
};
