import React from 'react';
import { Text, View } from 'react-native';

const Gallery = ({tenDogs}) => {
  return (
    <View>
      {/* <Text>Hi {tenDogs}</Text> */}
      <Text>Hi {tenDogs.map(dog => (<Text>{dog}</Text>))}</Text>
    </View>
  );
}

export default Gallery;

