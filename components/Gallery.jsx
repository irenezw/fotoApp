import {React, useState, useCallback} from 'react';
import Image from './Image.jsx';
import { Text, View, FlatList, ImageBackground, ScrollView, TouchableOpacity, Pressable, StyleSheet, RefreshControl} from 'react-native';
import { Icon } from "@rneui/themed";



//TODO diff-ing algorithm that compares previous render with the current code
//in order for diffing to occur in arrays. react wants us to use KEY PROPS
//bc it looks at key to determine if list item has changed
//
const Gallery = ({tenDogs, getDogsFromApi}) => {
  const [like, setLike] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000)
    .then(() => setRefreshing(false))
    .then(()=>(getDogsFromApi()))
    .catch((err)=> console.log('error refreshing'))
  }, []);

  const handleLike = () => {
    setLike(!like);
  }

  return (
    <ScrollView
     refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}>
      {tenDogs.map((dog, i) => (<Image dog={dog} key={i}/>))}
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

