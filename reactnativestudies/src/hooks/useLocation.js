import { useEffect, useState } from 'react'
import * as Location from 'expo-location'

const useLocation = () => {
  const [location, setLocation] = useState()
  const [status, requestPermission] = Location.useForegroundPermissions()

  useEffect(() => {
    if (!status?.granted) {
      requestPermission()
      return
    }

    const subscription = Location.watchPositionAsync(
      { accuracy: Location.Accuracy.Balanced },
      local => {
        setLocation(local)
      }
    )

    return () => subscription.then(sub => sub.remove())
  }, [status])

  return { location, status }
}

export default useLocation
