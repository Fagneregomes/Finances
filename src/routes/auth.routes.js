import React from 'react';
import { useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreens from '~/pages/SignIn';
import SignUpScreens from '~/pages/SignUp';

const Stack = createStackNavigator();

export default function AuthRoutes() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      activeColor={theme.colors.primary}
      initialRouteName="auth"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreens}
        options={{ tabBarIcon: 'home-account' }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreens}
        options={{ tabBarIcon: 'home-account' }}
      />
    </Stack.Navigator>
  );
}
