import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import App from './App';
import theme from './theme';
import { store, persistor } from './store';

export default function index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <App />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
