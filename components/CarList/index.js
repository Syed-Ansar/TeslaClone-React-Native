import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FlatList } from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from './styles';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        data={cars}
        renderItem={({ item }) => (
          <CarItem cars={item} keyExtractor={(item) => item.id} />
        )}
      />
    </View>
  );
};

export default CarList;
