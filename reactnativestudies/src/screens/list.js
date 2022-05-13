import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../components/card'

const List = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Card
        title='Relógio'
        description='Mostra as horas'
        onNavigateToApp={() => navigation.navigate('Relógio')}
      />
      <Card
        title='Clima'
        description='Mostra as informações climáticas da sua região'
        onNavigateToApp={() => navigation.navigate('Clima')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginVertical: 20
  }
})

export default List
