import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <App />
        </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/app/App';
// import './index.css';
// import { persistor, store } from 'redux/store';
// import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//   // <BrowserRouter basename="/goit-react-hw-08-phonebook">
//   <HashRouter>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </HashRouter>
//   // </BrowserRouter>
//   // </React.StrictMode>
// );