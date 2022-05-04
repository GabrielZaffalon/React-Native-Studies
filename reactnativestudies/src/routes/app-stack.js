import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Button from '../components/Button'

const Stack = createNativeStackNavigator()

const Teste = () => (
  <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
    <Button
      text='botão'
      onPress={() => {
        console.log('apertou')
      }}
    />
  </View>
)

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Apps' component={Teste} />
  </Stack.Navigator>
)
