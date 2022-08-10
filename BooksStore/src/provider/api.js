import axios from 'axios';
import Config from 'react-native-config';

const provider = axios.create({
  baseURL: Config.API_URL,
});

provider.interceptors.request.use(config => {
  return {
    ...config,
    params: {
      ...config.params,
      key: Config.BOOKS_API_KEY,
      langRestrict: 'pt',
    },
  };
});

export default provider;
