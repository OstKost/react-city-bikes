import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'main/store/configureStore';
import Routes from 'main/Routes';
import Layout from 'library/common/commonComponents/Layout/Layout';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
