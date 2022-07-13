import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComponent = ({onPress, price}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>Buy now for {price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 60,
    backgroundColor: '#06070D',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});

export default ButtonComponent;
