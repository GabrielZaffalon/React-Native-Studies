import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Feed = () => {
  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={BOOKS}
          horizontal={true}
          keyExtractor={item => {}}
          contentContainerStyle={{paddingLeft: 22}}
          renderItem={({item}) => {
            return <View />;
          }}
        />
      </View>
      <View>
        <View>
          <FlatList
            showsVeticalScrollIndicator={false}
            scrollEnabled={false}
            data={BOOKS}
            keyExtractor={item => {}}
            contentContainerStyle={{paddingLeft: 22}}
            renderItem={({item}) => {
              return <View />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Feed;
