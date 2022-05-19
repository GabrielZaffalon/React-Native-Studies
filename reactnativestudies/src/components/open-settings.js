import React from 'react'
import { Linking } from 'react-native'

import Card from './card'

const OpenSettings = () => {
  const handlePress = async () => {
    await Linking.openSettings()
  }

  return (
    <Card
      title={'Permissão negada'}
      description={'Você negou a permissão de localização, vá até as configurações para permitir'}
      onNavigateToApp={() => handlePress()}
    />
  )
}

export default OpenSettings
