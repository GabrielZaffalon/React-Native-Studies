import axios from 'axios'
import Config from 'react-native-config'

const provider = axios.create({
  baseURL: 'https://newsapi.org/'
})

provider.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: Config.NEWS_API_KEY
    }
  }
})

export default provider
