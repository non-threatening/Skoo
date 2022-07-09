import * as React from 'react';
import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';

import styles from './styles';
import data from './manifest';

export const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      {data.data.map((item, key) => {
        return (
          <View key={key}>
            <TouchableHighlight
              onPress={() => navigation.navigate('Track', {key: key})}>
              <Image
                source={{
                  uri: item.cover,
                }}
                resizeMode="contain"
                style={styles.albumImage}
              />
            </TouchableHighlight>
            <View style={styles.detailsContainer}>
              <Text style={styles.songTitle}> {item.title} </Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
