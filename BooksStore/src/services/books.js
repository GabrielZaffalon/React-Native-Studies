import api from '../provider/api';

export const showBooks = query => api.get(`/v1/volumes?q=${query}`);

//!api.get('...', { params: { query, langRestrict: 'pt' } })
