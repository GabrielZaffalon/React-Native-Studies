import { useEffect } from 'react'

const useInterval = (callback, timeInMilliSeconds = 1000) => {
  useEffect(() => {
    const interval = setInterval(callback, timeInMilliSeconds)
    return () => clearInterval(interval)
  })
}

export default useInterval
