import React from 'react'
import { useRoute } from '@react-navigation/native'
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  useWindowDimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { formatDate } from '../utils/DateFormatter'

const News = ({ navigation }) => {
  const { width } = useWindowDimensions()
  const height = width * 0.8

  const route = useRoute()
  const news = route.params.news

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={
            news.urlToImage != null
              ? { uri: news.urlToImage }
              : require('../../assets/images/questionMark.png')
          }
          resizeMode='cover'
          style={{ width, height, marginBottom: 16 }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='chevron-left' size={24} color='#FFF' style={styles.backIcon} />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.row}>
          <Text style={styles.text}>{news.author != null ? news.author : 'Unkown'}</Text>
          <View style={styles.dot} />
          <Text style={styles.text}>{formatDate(news.publishedAt)}</Text>
        </View>
        <Text style={styles.title}>{news.title}</Text>
        <View style={styles.row}>
          <Icon name='plus' size={24} color='#FFF' style={styles.rowIcon} />
          <Icon name='volume-2' size={24} color='#FFF' style={styles.rowIcon} />
          <Icon name='heart' size={24} color='#FFF' style={styles.rowIcon} />
        </View>
        <Text style={styles.news}>{news.content}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 20
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
    fontSize: 24,
    flexWrap: 'wrap',
    marginHorizontal: 20
  },
  text: {
    color: '#949494',
    fontFamily: 'Inter-Regular',
    fontSize: 12
  },
  news: {
    color: '#FFF',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 8
  },
  backIcon: {
    marginLeft: 10,
    marginTop: 50
  },
  rowIcon: {
    marginRight: 18
  }
})

export default News
