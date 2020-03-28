import React from 'react';
import { useTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconSimples from 'react-native-vector-icons/SimpleLineIcons';

import DashboardScreen from '~/pages/Dashboard';
import ProfileScreen from '~/pages/Profile';

const Tab = createMaterialBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      keyboardHidesNavigationBar
      activeColor={theme.colors.primary}
      barStyle={{ backgroundColor: theme.colors.surface, height: 50 }}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon name="chart-pie" size={16} />
            ) : (
              <IconSimples name="pie-chart" size={16} />
            ),
          title: 'Finanças',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="user" size={16} solid={focused} />
          ),
          title: 'Perfil',
        }}
      />
    </Tab.Navigator>
  );
}
