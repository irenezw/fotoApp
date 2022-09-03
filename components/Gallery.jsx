import React from 'react';
import { Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
//TODO diff-ing algorithm that compares previous render with the current code
//in order for diffing to occur in arrays. react wants us to use KEY PROPS
//bc it looks at key to determine if list item has changed
//
const Gallery = ({tenDogs}) => {
  return (
    <ScrollView>
      {tenDogs.map((dog, i) => (
        <TouchableOpacity>
        <ImageBackground
          key={i}
          style={{width: 200, height: 200}}
          source = {{uri: dog}}>
          <Pressable onPress={()=>{console.log('LIKED')}} style={styles.button}>
            <Text>LIKE</Text>
          </Pressable>
        </ImageBackground>
       </TouchableOpacity>))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 25,
    right: 25
  }
});


export default Gallery;

