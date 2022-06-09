import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonComponent = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>Mostrar mais</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#262B33',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold'
  }
})

export default ButtonComponent
