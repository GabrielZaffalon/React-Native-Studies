import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Card from '../components/card'

const SCREENS = [
  { title: 'Relógio', description: 'Mostra as horas', navigate: 'Relógio' },
  {
    title: 'Clima',
    description: 'Mostra as informações climáticas da sua região',
    navigate: 'Clima'
  }
]

const List = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
        data={SCREENS}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              onNavigateToApp={() => navigation.navigate(item.navigate)}
            />
          )
        }}
      />
      {/* <Card
        title='Relógio'
        description='Mostra as horas'
        onNavigateToApp={() => navigation.navigate('Relógio')}
      />
      <Card
        title='Clima'
        description='Mostra as informações climáticas da sua região'
        onNavigateToApp={() => navigation.navigate('Clima')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  }
})

export default List
