// import { Loader } from 'components/Loader/Loader';
// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <main
        style={{
          height: '100vh',
          background:
            'linear-gradient(45deg,rgba(0,67,254,0.10830269607843135) 0%, rgba(0,37,251,0.24275647759103647) 5%, rgba(149,237,255,0.455641631652661) 92%)',
        }}
      >
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};
