import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import CreateRoutes from './routes';
// import { Container } from './styles';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);
  const Router = () => CreateRoutes(signed);

  return (
    <>
      <StatusBar
        barStyle={signed ? 'dark-content' : 'light-content'}
        backgroundColor={signed ? '#FFF' : '#00B0C2'}
      />

      <Router />
    </>
  );
}
