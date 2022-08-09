import api from '../provider/api';

export const showBooks = query =>
  api.get(`/v1/volumes?q=${query}&langRestrict=pt`);

// fetch(
//   `https://www.googleapis.com/books/v1/volumes?q=${query}&langRestrict=pt&key=AIzaSyBPre-eMyIPNY8HcA-KT6C9RF1FblEmj7U`,
// ).then(response => response.json());

//api.get('...', { params: { query, langRestrict: 'pt' } })
