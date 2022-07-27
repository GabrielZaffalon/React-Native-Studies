import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({onPress, title, icon = '', variant = 'primary'}) => {
  return (
    <TouchableOpacity
      style={styles[`${variant}VariantContainer`]}
      onPress={onPress}>
      <View style={styles.row}>
        {icon !== '' ? (
          <Icon name={icon} color="#000" size={24} style={styles.icon} />
        ) : (
          <View />
        )}
        <Text style={styles[`${variant}VariantText`]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryVariantContainer: {
    backgroundColor: '#000',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryVariantText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    marginVertical: 18,
  },
  secondaryVariantContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 1,
    alignItems: 'center',
  },
  secondaryVariantText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    marginRight: 32,
  },
  icon: {
    marginVertical: 8,
    marginRight: 15,
    marginLeft: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Button;
