import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Stack = createStackNavigator();

export default (isSigned) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={isSigned ? 'App' : 'Auth'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthRoutes} />
      <Stack.Screen name="App" component={AppRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
);
