import {React, useState} from 'react';
import Image from './Image.jsx';
import { Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import { Icon } from "@rneui/themed";



//TODO diff-ing algorithm that compares previous render with the current code
//in order for diffing to occur in arrays. react wants us to use KEY PROPS
//bc it looks at key to determine if list item has changed
//
const Gallery = ({tenDogs}) => {
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
  }

  return (
    <ScrollView>
      {tenDogs.map((dog, i) => (
        <ImageBackground
          // style={styles.image}
          key={i}
          style={{width: 280, height: 250, margin: 5}}
          imageStyle={{ borderRadius: 15}}
          source = {{uri: dog}}>
          <Pressable  style={styles.button}>
            {/* <Text>LIKE</Text> */}
            <View key={i}>
            <Icon
              key={i}
              raised
              name='heart'
              type='font-awesome'
              color={like ? 'red' : 'gray'}
              onPress={() => {
                handleLike()
              }}
              />
            </View>
          </Pressable>
        </ImageBackground>
       ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    right: 10
  }
});


export default Gallery;

