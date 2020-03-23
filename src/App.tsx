import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'main/store/configureStore';
import Routes from 'main/Routes';
import Layout from 'library/common/commonComponents/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* Add basename for gh-pages basename='react-city-bikes' */}
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
