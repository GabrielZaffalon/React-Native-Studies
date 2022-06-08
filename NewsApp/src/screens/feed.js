import React, { useState, useEffect } from 'react'
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import RowCards from '../components/RowImagesCards'
import ColumnCards from '../components/ColumnImagesCards'
import { showHeadLines } from '../services/news'

const Feed = () => {
  const navigation = useNavigation()

  const [topHeadLines, setTopHeadLines] = useState([])

  useEffect(() => {
    const fetchTopHeadLines = async () => {
      try {
        const response = await showHeadLines()
        setTopHeadLines(response.data.articles.filter(article => !!article.urlToImage))
      } catch (error) {
        console.log(error)
      }
    }

    fetchTopHeadLines()
  }, [])

  const highlights = topHeadLines.slice(0, 8)
  const feed = topHeadLines.slice(8)

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.highlights}>
        <Text style={styles.title}>Technology</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={highlights}
          horizontal={true}
          keyExtractor={item => item.url}
          contentContainerStyle={{ paddingLeft: 22 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('News', { news: item })}>
                <RowCards
                  image={item.urlToImage}
                  author={item.author != null ? item.author : 'Unkown'}
                  title={item.title}
                  date={item.publishedAt}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
      <View style={styles.feed}>
        <Text style={styles.title}>My Newsletter</Text>

        <FlatList
          showsVeticalScrollIndicator={false}
          scrollEnabled={false}
          data={feed}
          keyExtractor={item => item.url}
          contentContainerStyle={{ paddingLeft: 22 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('News', { news: item })}>
                <ColumnCards
                  image={item.urlToImage}
                  author={item.author != null ? item.author : 'Unkown'}
                  title={item.title}
                  date={item.publishedAt}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  highlights: {
    backgroundColor: '#262B33',
    paddingVertical: 22,
    paddingTop: 50
  },
  title: {
    fontFamily: 'Inter-Bold',
    color: '#FFF',
    fontSize: 24,
    marginBottom: 20,
    marginLeft: 22
  },
  feed: {
    backgroundColor: '#191C21',
    paddingTop: 22
  }
})

export default Feed
