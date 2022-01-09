import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.cars;
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA} </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
