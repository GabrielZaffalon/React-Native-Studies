import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Button from './button'

const AppCard = ({ title, description, onNavigateToApp }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.container}>
      <View />
      <Button text='Ver mais' onPress={onNavigateToApp} />
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: '#E7E0EC',
    padding: 16,
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#49454F'
  },
  description: {
    fontSize: 16,
    marginTop: 2,
    letterSpacing: 0.15,
    color: '#79747E'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  }
})

export default AppCard
