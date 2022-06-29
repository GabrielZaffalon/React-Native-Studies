import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

const Stack = createNativeStackNavigator;

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screens name="App" component={() => <View />} />
  </Stack.Navigator>
);
