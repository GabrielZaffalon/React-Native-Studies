import React, {useEffect, useState, Fragment} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import RowCard from '../components/rowCard';
import ColumnCard from '../components/ColumnCard';
import {showBooks} from '../services/books';

const Feed = () => {
  const navigation = useNavigation();

  const [query, setQuery] = useState('Fiction');
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await showBooks(query);
        setBooks(response.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <Fragment>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.header}>
            <View style={styles.profile}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={styles.profilePick}
              />
              <Text style={styles.headerText}>Olá, Gabriel</Text>
            </View>
            <TouchableOpacity>
              <Icon name="search-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Popular Books</Text>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={books}
            horizontal={true}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingLeft: 22}}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Book', {book: item})}>
                  <RowCard
                    image={item?.volumeInfo?.imageLinks?.thumbnail}
                    author={
                      !!item?.volumeInfo?.authors
                        ? item?.volumeInfo?.authors
                        : 'Desconhecido'
                    }
                    title={item?.volumeInfo?.title}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}>Newst</Text>
            <FlatList
              showsVeticalScrollIndicator={false}
              scrollEnabled={false}
              data={books}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                paddingLeft: 22,
                marginBottom: 100,
                marginTop: 28,
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Book', {book: item})}>
                    <ColumnCard
                      image={item?.volumeInfo?.imageLinks?.thumbnail}
                      author={
                        !!item?.volumeInfo?.authors
                          ? item?.volumeInfo?.authors
                          : 'Desconhecido'
                      }
                      title={item?.volumeInfo?.title}
                      style={styles.columnCards}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <TouchableOpacity>
            <Icon
              name="home-outline"
              size={24}
              color="#000"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="bookmark-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="cart-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="settings-outline"
              size={24}
              color="#9C9EA8"
              style={styles.icone}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 28,
    marginVertical: 42,
  },
  profilePick: {
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 12,
  },
  headerText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    marginLeft: 22,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 22,
  },
  footerBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#FFF',
    elevation: 1,
  },
  icone: {
    marginVertical: 27,
  },
  columnCards: {
    marginTop: 28,
  },
});

export default Feed;
