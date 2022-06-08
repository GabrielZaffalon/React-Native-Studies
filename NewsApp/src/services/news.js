import api from '../providers/api'

export const showHeadLines = () => api.get('/v2/top-headlines?country=br&category=technology')
