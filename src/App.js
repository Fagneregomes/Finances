import React from 'react';
import { useSelector } from 'react-redux';

import CreateRoutes from './routes';
// import { Container } from './styles';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  const Router = () => CreateRoutes(signed);

  return <Router />;
}
