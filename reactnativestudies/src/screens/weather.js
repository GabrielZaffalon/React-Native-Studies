import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import { getWeatherFromLatAndLong } from '../services/weather'

const Weather = () => {
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const isFocused = useIsFocused()

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true)
      try {
        const response = await getWeatherFromLatAndLong()
        setWeather(response)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchWeather()
  }, [isFocused])

  return isLoading ? (
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
