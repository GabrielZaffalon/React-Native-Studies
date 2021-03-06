import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

import { formatDistanceStrictDate } from '../utils/DateFormatter'

const RowImagesCards = ({ image, author, title, date }) => {
  return (
    <View style={styles.highlights}>
      <Image
        source={image != null ? { uri: image } : require('../../assets/images/questionMark.png')}
        style={styles.image}
      />
      <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.row}>
        <Text
          style={author.length > 18 ? styles.shortText : styles.text}
          ellipsizeMode='tail'
          numberOfLines={1}
        >
          {author}
        </Text>
        <View style={styles.dot} />
        <Text style={styles.text}>{formatDistanceStrictDate(date)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 218,
    height: 160,
    borderRadius: 14,
    marginRight: 14
  },
  highlights: {
    flex: 1,
    marginRight: 8
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  dot: {
    backgroundColor: '#949494',
    height: 2,
    width: 2,
    borderRadius: 5,
    marginHorizontal: 8
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#FFF',
    fontSize: 14,
    marginTop: 8,
    flexWrap: 'wrap',
    width: 200
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 12
  },
  shortText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    width: 120
  }
})

export default RowImagesCards
