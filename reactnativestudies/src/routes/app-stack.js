import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Button from '../components/button'
import Card from '../components/card'

const Stack = createNativeStackNavigator()

const Teste = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      text='botão'
      onPress={() => {
        console.log('apertou')
      }}
    />
    <Card
      title='Esse é o título'
      description='Essa é a descrição'
      onNavigateToApp={() => console.log('Apertou Card')}
    />
  </View>
)

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Apps' component={Teste} />
  </Stack.Navigator>
)
