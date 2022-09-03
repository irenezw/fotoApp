import React from 'react';
import { Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Button} from 'react-native';
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
          <Button
          onPress={()=>{console.log('LIKED')}}
          title="Like"
          color= 'white'
          accessibilityLabel="'Like' Button"/>
        </ImageBackground>
       </TouchableOpacity>))}
    </ScrollView>
  )
}




export default Gallery;

