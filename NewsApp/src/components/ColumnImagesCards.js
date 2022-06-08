import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'

import { formatDate } from './DateFormatter'

const ColumnImagesCards = ({ image, author, title, date }) => {
  return (
    <View>
      <View style={styles.feed}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.column}>
          <View style={styles.row}>
            {author.length > 18 ? (
              <Text style={styles.shortText} ellipsizeMode='tail' numberOfLines={1}>
                {author}
              </Text>
            ) : (
              <Text style={styles.text} ellipsizeMode='tail' numberOfLines={1}>
                {author}
              </Text>
            )}
            <View style={styles.dot} />
            <Text style={styles.text}>{formatDate(date)}</Text>
          </View>
          <Text style={styles.title} ellipsizeMode='tail' numberOfLines={2}>
            {title}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginRight: 14
  },
  feed: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 150
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6
  },
  line: {
    backgroundColor: '#262626',
    height: 1,
    width: '100%',
    paddingHorizontal: 22,
    marginVertical: 16
  },
  column: {
    flexDirection: 'column'
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
    fontSize: 18,
    marginTop: 6,
    flexWrap: 'wrap',
    width: 270
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16
  },
  shortText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    width: 150
  }
})

export default ColumnImagesCards
