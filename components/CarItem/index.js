import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

function CarItem() {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/ModelS.jpeg')}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>starting at $60,000</Text>
      </View>

      <StyledButton
        type='primary'
        content={'Custom Button'}
        onPress={() => {
          console.warn('Custom was pressesed');
        }}
      />
      <StyledButton
        type='secondary'
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('Existing Inventory was pressesed');
        }}
      />
    </View>
  );
}

export default CarItem;
