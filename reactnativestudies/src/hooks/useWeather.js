import { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'

import { getWeatherFromLatAndLong } from '../services/weather'

const defaultUseWeatherParams = { latidude: -31.739793, longitude: -52.3450719 }

const useWeather = ({ latitude, longitude } = defaultUseWeatherParams) => {
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
    fetchWeather()
  }, [isFocused, latitude, longitude])

  return { weather, isLoading }
}

export default useWeather
