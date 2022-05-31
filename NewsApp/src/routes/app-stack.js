import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Apps' component={() => <View />} />
  </Stack.Navigator>
)
