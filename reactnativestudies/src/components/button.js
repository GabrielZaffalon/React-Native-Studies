import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

import { defaultRippleConfiguration } from '../config/ripple'

const ButtonComponent = ({ text, onPress }) => (
  <Pressable style={styles.button} onPress={onPress} android_ripple={defaultRippleConfiguration}>
    <Text style={styles.title}>{text}</Text>
  </Pressable>
)

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    backgroundColor: '#6750A4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 40
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    letterSpacing: 0.1,
    fontWeight: 'bold'
  }
})

export default ButtonComponent
