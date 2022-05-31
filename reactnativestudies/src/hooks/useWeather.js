import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { getWeatherFromLatAndLong } from '../services/weather'

const useWeather = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const isFocused = useIsFocused()

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true)
      try {
        const response = await getWeatherFromLatAndLong(latitude, longitude)
        setWeather(response)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    if (latitude && longitude) {
      fetchWeather()
    }
  }, [isFocused, latitude, longitude])

  return { weather, isLoading }
}

export default useWeather
