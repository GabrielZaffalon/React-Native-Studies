import React from 'react'
import { useRoute } from '@react-navigation/native'
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const News = ({ navigation }) => {
  const route = useRoute()
  const news = route.params.news

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground source={{ uri: news.image }} resizeMode='cover' style={styles.image}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='chevron-left' size={40} color='#FFF' style={styles.backIcon} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.row}>
        <Text style={styles.text}>{news.author}</Text>
        <View style={styles.dot} />
        <Text style={styles.text}>{news.date}</Text>
      </View>
      <Text style={styles.title}>{news.title}</Text>
      <View style={styles.row}>
        <Icon name='plus' size={30} color='#FFF' style={styles.rowIcon} />
        <Icon name='volume-2' size={30} color='#FFF' style={styles.rowIcon} />
        <Icon name='heart' size={30} color='#FFF' style={styles.rowIcon} />
      </View>
      <Text style={styles.news}>{news.news}</Text>
    </ScrollView>
  )
}

const width = Dimensions.get('screen').width
const height = width * 0.8

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
  image: {
    width,
    height,
    marginBottom: 16
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
