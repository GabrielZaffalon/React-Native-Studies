import React from 'react'
import { View, ScrollView, FlatList, Text, StatusBar, StyleSheet } from 'react-native'

import RowCards from '../components/RowImagesCards'
import ColumnCards from '../components/ColumnImagesCards'

const NEWS = [
  {
    image: 'https://images-na.ssl-images-amazon.com/images/I/81kk5xiBlxL.png',
    author: 'Lorem ipson',
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    date: '2 days ago',
    id: 1
  },
  {
    image:
      'https://media.sketchfab.com/models/0634683fee6147c0b3d66b23d1643565/thumbnails/e59c009c5ab6426b952e5e1053c234ff/be38ecbf241640cebaf3bf1f5217ccb2.jpeg',
    author: 'Lorem Ipsum',
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    date: '2 days ago',
    id: 2
  },
  {
    image: 'https://www.pressmanager.com.br/wp-content/uploads/2019/05/tecnologia.png',
    author: 'Lorem Ipsum',
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    date: '2 days ago',
    id: 3
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/thumbnails/002/184/680/small/abstract-technology-background-free-vector.jpg',
    author: 'Lorem Ipsum',
    title:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
    date: '2 days ago',
    id: 4
  }
]

const Feed = () => {
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.highlights}>
        <Text style={styles.title}>Technology</Text>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={NEWS}
          horizontal={true}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingLeft: 22 }}
          renderItem={({ item }) => {
            return (
              <RowCards
                image={item.image}
                author={item.author}
                title={item.title}
                date={item.date}
              />
            )
          }}
        />
      </View>
      <View style={styles.feed}>
        <Text style={styles.title}>My Newsletter</Text>

        <FlatList
          showsVeticalScrollIndicator={false}
          scrollEnabled={false}
          data={NEWS}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingLeft: 22 }}
          renderItem={({ item }) => {
            return (
              <ColumnCards
                image={item.image}
                author={item.author}
                title={item.title}
                date={item.date}
              />
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
