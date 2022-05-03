import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Button = ({ text }) => (
  <View style={styles.button}>
    <Text style={title}>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
