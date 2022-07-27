import React, {Fragment} from 'react';
import {useRoute} from '@react-navigation/native';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import Button from '../components/button';

const Book = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const book = route.params.book;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            size={24}
            color="#000"
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="bookmark-outline" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Icon
              name="ellipsis-vertical"
              size={24}
              color="#000"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.center}>
        <Image source={{uri: book.capa}} style={styles.image} />
      </View>
      <View style={styles.center}>
        <Text style={styles.title}>{book.titulo}</Text>
        <Text style={styles.author}>{book.autor}</Text>
        <View style={styles.row}>
          <Icon name="star" size={18} color="#FFC41F" />
          <Icon name="star" size={18} color="#FFC41F" />
          <Icon name="star" size={18} color="#FFC41F" />
          <Icon name="star-half" size={18} color="#FFC41F" />
          <Icon name="star-outline" size={18} color="#FFC41F" />
          <Text
            style={{
              color: '#000',
              fontFamily: 'Poppins-Regular',
              marginLeft: 10,
              fontSize: 14,
            }}>
            4.5
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#9C9EA8',
              alignItems: 'center',
            }}>
            {' '}
            / 5.0
          </Text>
        </View>
      </View>
      <Text style={styles.text}>{book.resumo}</Text>
      <View style={styles.rowButton}>
        <Button
          variant="secondary"
          icon="book-outline"
          title="Preview"
          onPress={() => {}}
        />
        <Button
          variant="secondary"
          icon="chatbox-ellipses-outline"
          title="Reviews"
          onPress={() => {}}
        />
      </View>
      <View style={styles.button}>
        <Button title="Compre agora por R$49,99" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 54,
  },
  icon: {
    marginHorizontal: 22,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  image: {
    height: 320,
    width: 216,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginVertical: 22,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#000',
  },
  author: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#9C9EA8',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9C9EA8',
    alignItems: 'center',
    margin: 22,
  },
  rowButton: {
    flexDirection: 'row',
    marginHorizontal: 22,
    justifyContent: 'space-around',
  },
  button: {
    margin: 22,
  },
});

export default Book;
