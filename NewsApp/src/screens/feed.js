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
import LoadingRowCard from '../components/LoadingRowCard'
import LoadingColumCard from '../components/LoadingColumCard'

const Feed = () => {
  const navigation = useNavigation()

  const [topHeadLines, setTopHeadLines] = useState([])
  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchTopHeadLines = async () => {
      setIsLoading(true)
      try {
        const response = await showHeadLines()
        setTopHeadLines(response.data.articles.filter(article => !!article.urlToImage))
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
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
        {loading ? (
          <LoadingRowCard />
        ) : (
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
        )}
      </View>
      <View style={styles.feed}>
        <Text style={styles.title}>My Newsletter</Text>

        {loading ? (
          <LoadingColumCard />
        ) : (
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
        )}
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
    paddingTop: 22,
    flex: 1
  },
  shimmerImage: {
    width: 218,
    height: 160,
    borderRadius: 14,
    marginRight: 14
  },
  shimmerText: {
    width: 120,
    marginTop: 8
  },
  shimmerTitle: {
    marginTop: 6,
    width: 200
  }
})

export default Feed
