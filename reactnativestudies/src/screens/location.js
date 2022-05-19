import React from 'react'
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native'

import useLocation from '../hooks/useLocation'
import OpenSettings from '../components/open-settings'

export default function App() {
  const { location, status } = useLocation()

  return !status?.canAskAgain ? (
    <View style={styles.container}>
      <OpenSettings />
    </View>
  ) : !location ? (
    <View style={styles.container}>
      <ActivityIndicator color='black' size='large' />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Latitude: {location?.coords?.latitude}</Text>
      <Text style={styles.text}>Longitude: {location?.coords?.longitude}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
})
