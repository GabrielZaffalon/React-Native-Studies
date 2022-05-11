import { useState } from 'react'

import useInterval from './useInterval'

const useLocaleTimeString = () => {
  const [time, setTime] = useState(new Date())

  useInterval(() => {
    const date = new Date()
    setTime(date)
  })

  return time.toLocaleTimeString()
}

export default useLocaleTimeString
