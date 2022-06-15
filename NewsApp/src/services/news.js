import api from '../providers/api'

export const showHeadLines = page =>
  api.get(`/v2/top-headlines?country=br&category=technology&page=${page}`)
