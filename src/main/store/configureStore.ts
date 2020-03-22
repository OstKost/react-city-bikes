import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import { mainReducer } from 'main/mainReducer';
import { mainSaga } from 'main/mainSaga';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['stations']
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancer =
  process.env.NODE_ENV !== 'production' ? composeWithDevTools({}) : compose();

export let store = createStore(
  persistedReducer,
  {},
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

export let persistor = persistStore(store);

sagaMiddleware.run(mainSaga);
