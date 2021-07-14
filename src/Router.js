/**
 * Sample React Native Router
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Categories from './screens/Categories';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#f4a312',
          },
        }}>
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
