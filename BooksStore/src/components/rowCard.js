import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const RowCard = ({image, author, title}) => {
  return (
    <View style={styles.highlights}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.author} ellipsizeMode="tail" numberOfLines={1}>
        {author}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 126,
    height: 192,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 14,
  },
  highlights: {
    flex: 1,
    marginRight: 18,
    marginVertical: 34,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 16,
    marginTop: 20,
    width: 126,
  },
  author: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9C9EA8',
    width: 126,
  },
});

export default RowCard;
