import React from 'react';
import { Text, View, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
//TODO diff-ing algorithm that compares previous render with the current code
//in order for diffing to occur in arrays. react wants us to use KEY PROPS
//bc it looks at key to determine if list item has changed
//
const Gallery = ({tenDogs}) => {
  return (
    <ScrollView>
      {/* {console.log(`"${tenDogs[0]}"`)} */}
      {tenDogs.map((dog, i) => (
      <TouchableOpacity onPress={()=>{console.log('LIKE')}}>
        <Image
        key={i}
        style={{width: 200, height: 200}}
        // source={{uri:`${dog}`}}
        // source={{uri:{dog}}}
        source = {{uri: dog}}
      />
      </TouchableOpacity>))}

    </ScrollView>
    // {tenDogs.map((dog, i) => (<Text key={i}>{i}: {dog}</Text>))}
    // <Image source={{uri: imageUrl}} />

    // <Image {tenDogs[0]}/>

    // <FlatList
    //   data={tenDogs}
    //   renderItem={<Text>{tenDogs}</Text>}
    //   />
  // <View>
  //    {tenDogs.map((dog, i) => { console.log(dog) return (<Image style={{width: 200, height: 200}} source={{uri:"https://images.dog.ceo/breeds/retriever-golden/Z6A_4650_200812.jpg%22%7D%7D/%3E")

  // </View>
  )
}




export default Gallery;

