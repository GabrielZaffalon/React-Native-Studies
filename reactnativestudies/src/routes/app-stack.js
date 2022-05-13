import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Button from '../components/button'
import Card from '../components/card'
import Clock from '../screens/clock'
import Weather from '../screens/weather'
import List from '../screens/list'

const Stack = createNativeStackNavigator()

const Teste = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      text='botão'
      onPress={() => {
        console.log('apertou')
      }}
    />
    <Text style={{ fontFamily: 'Bangers-Regular', color: 'black', fontSize: 50 }}>12:34</Text>
    <Card
      title='Esse é o título'
      description='Essa é a descrição'
      onNavigateToApp={() => console.log('Apertou Card')}
    />
  </View>
)

export const AppStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Listagem' component={List} />
    <Stack.Screen name='Relógio' component={Clock} />
    <Stack.Screen name='Clima' component={Weather} />
  </Stack.Navigator>
)
