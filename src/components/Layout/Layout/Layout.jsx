// import { Loader } from 'components/Loader/Loader';
// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};
