import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import useLocaleTimeString from '../hooks/useLocaleTimeString'

const Clock = () => {
  const time = useLocaleTimeString()

  return (
    <View style={styles.container}>
      <Text style={styles.font}>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  font: {
    fontFamily: 'Bangers-Regular',
    color: 'black',
    fontSize: 50
  }
})

export default Clock
