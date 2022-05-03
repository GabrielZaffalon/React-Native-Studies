import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/native-stack'

const Stack = createStackNavigator()

const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Apps' component={() => <View />} />
  </Stack.Navigator>
)

export default AppStack
