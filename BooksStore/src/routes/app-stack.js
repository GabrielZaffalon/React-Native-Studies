import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Feed from '../screens/feed';

const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator>
);
