import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import useWeather from '../hooks/useWeather'
import useLocation from '../hooks/useLocation'
import OpenSettings from '../components/open-settings'

const Weather = () => {
  const { location, status } = useLocation()
  const { weather, isLoading } = useWeather({
    latitude: location?.coords?.latitude,
    longitude: location?.coords?.longitude
  })

  return !status?.canAskAgain ? (
    <View style={styles.container}>
      <OpenSettings />
    </View>
  ) : isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color='black' size='large' />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.fontBig}>{weather?.main.temp.toFixed(0)}°</Text>
      <View style={styles.row}>
        <Text style={styles.fontSmall}>Sen.: {weather?.main.feels_like.toFixed(0)}°</Text>
        <Text style={styles.fontSmall}>Máx.: {weather?.main.temp_max.toFixed(0)}°</Text>
        <Text style={styles.fontSmall}>Mín.: {weather?.main.temp_min.toFixed(0)}°</Text>
        <Text style={styles.fontSmall}>Umidade: {weather?.main.humidity.toFixed(0)}%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fontBig: {
    fontFamily: 'Bangers-Regular',
    color: 'black',
    fontSize: 100
  },
  fontSmall: {
    fontFamily: 'Bangers-Regular',
    color: 'black',
    fontSize: 25,
    margin: 2
  }
})

export default Weather
