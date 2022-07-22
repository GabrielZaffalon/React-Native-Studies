import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const ColumnCard = ({image, author, title}) => {
  return (
    <View>
      <View style={styles.feed}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.title}>{title}</Text>
            <Icon name="bookmark-outline" size={20} color="#000" />
          </View>
          <Text style={styles.text}>{author}</Text>
          <View style={styles.row}>
            <Icon name="star" size={20} color="#FFC41F" />
            <Icon name="star" size={20} color="#FFC41F" />
            <Icon name="star" size={20} color="#FFC41F" />
            <Icon name="star-half" size={20} color="#FFC41F" />
            <Icon name="star-outline" size={20} color="#FFC41F" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 72,
    height: 106,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 14,
  },
  feed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 150,
    marginBottom: 23,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
    flexWrap: 'wrap',
    width: 260,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9C9EA8',
    marginBottom: 22,
  },
  estrelas: {
    color: 'yellow',
    fontWeight: 'bold',
  },
});

export default ColumnCard;
