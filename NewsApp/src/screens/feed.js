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
import Button from '../components/button'

const Feed = () => {
  const navigation = useNavigation()

  const [page, setPage] = useState(1)
  const [topHeadLines, setTopHeadLines] = useState([])
  const [totalResults, setTotalResults] = useState()
  const [loading, setIsLoading] = useState(false)

  const placeHolderImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Question_Mark.svg/1200px-Question_Mark.svg.png'

  useEffect(() => {
    const fetchTopHeadLines = async () => {
      setIsLoading(true)

      try {
        const response = await showHeadLines(page)
        setTopHeadLines(previousState => [...previousState, ...response.data.articles])
        setTotalResults(response.data.totalResults)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTopHeadLines()
  }, [page])

  const highlights = topHeadLines.slice(0, 5)
  const feed = topHeadLines.slice(5)

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.highlights}>
        <Text style={styles.title}>Technology</Text>
        {loading && page === 1 ? (
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
                    image={item.urlToImage != null ? item.urlToImage : placeHolderImage}
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

        {loading && page === 1 ? (
          <LoadingColumCard />
        ) : (
          <View>
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
                      image={item.urlToImage === null ? placeHolderImage : item.urlToImage}
                      author={item.author != null ? item.author : 'Unkown'}
                      title={item.title}
                      date={item.publishedAt}
                    />
                  </TouchableOpacity>
                )
              }}
            />

            <View style={styles.footer}>
              {topHeadLines.length < totalResults ? (
                <Button
                  onPress={() => {
                    setPage(page + 1)
                  }}
                />
              ) : (
                <View />
              )}
            </View>
          </View>
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
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
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
