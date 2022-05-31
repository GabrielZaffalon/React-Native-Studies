import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Clock from '../screens/clock'
import Weather from '../screens/weather'
import List from '../screens/list'
import Location from '../screens/location'

const Stack = createNativeStackNavigator()

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Listagem' component={List} />
    <Stack.Screen name='Relógio' component={Clock} />
    <Stack.Screen name='Clima' component={Weather} />
    <Stack.Screen name='Localização' component={Location} />
  </Stack.Navigator>
)
