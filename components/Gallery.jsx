import React from 'react';
import { Text, View } from 'react-native';

const Gallery = ({tenDogs}) => {
  return (
    <View>
      <Text>Hi {tenDogs.map(dog => (<Text>{dog}</Text>))}</Text>
    </View>
  );
}

export default const Image = () => {
  return (
    <View></View>
  )
}
export default Gallery;


