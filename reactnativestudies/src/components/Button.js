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
    paddingVertical: 16,
    backgroundColor: '#6750A4',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default ButtonComponent
