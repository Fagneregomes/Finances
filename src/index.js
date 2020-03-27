import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import './config/ReactotronConfig';

import theme from './theme';
import Routes from './routes';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />
      <Routes />
    </PaperProvider>
  );
}
