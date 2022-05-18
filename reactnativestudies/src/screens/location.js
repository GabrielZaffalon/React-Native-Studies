import React, { useState, useEffect } from 'react'
import { Platform, Text, View, ActivityIndicator, StyleSheet } from 'react-native'
import * as Location from 'expo-location'

export default function App() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      setIsLoading(true)
      try {
        const response = await Location.getCurrentPositionAsync({})
        setLocation(response)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocation()
    // ;(async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync()
    //   if (status !== 'granted') {
    //     setErrorMsg('Permission to access location was denied')
    //     return
    //   }

    //   let location = await Location.getCurrentPositionAsync({})
    //   setLocation(location)
    // })()
  }, [])

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color='black' size='large' />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Latitude: {JSON.stringify(location.coords.latitude)}</Text>
      <Text style={styles.paragraph}>Longitude: {JSON.stringify(location.coords.longitude)}</Text>
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
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  }
})
